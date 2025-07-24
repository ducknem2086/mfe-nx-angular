// typings/global.d.ts
// Add global declarations for Webpack Module Federation runtime without using standard namespaces

declare global {
  /** Webpack sharing initializer */
  const __webpack_init_sharing__: (scope: string) => Promise<void>;
  /** Webpack shared scopes */
  const __webpack_share_scopes__: { default: unknown };

  /** Window can hold dynamic remote containers */
  interface Window {
    [key: string]: unknown;
  }
}

export interface WebpackContainer {
  init(shareScope: unknown): Promise<void>;

  get<T = any>(module: string): Promise<() => T>;
}

export {};

// load-remote-module.ts
// Runtime loader for Module Federation remotes

export interface RemoteOptions {
  remoteEntry: string;
  remoteName: string;
  exposedModule: string;
}

declare const __webpack_init_sharing__: (scope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: unknown };

export async function loadRemoteModule<T = any>(
  opts: RemoteOptions
): Promise<T> {
  await new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[data-remote="${opts.remoteName}"]`))
      return resolve();
    const script = document.createElement('script');
    script.src = opts.remoteEntry;
    script.async = true;
    script.dataset['remote'] = opts.remoteName;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error(`Failed to load ${opts.remoteEntry}`));
    document.head.appendChild(script);
  });

  await __webpack_init_sharing__('default');

  const containerRaw = (window as any)[opts.remoteName];
  if (!containerRaw)
    throw new Error(`Remote container ${opts.remoteName} not found`);
  const container = containerRaw as WebpackContainer;

  await container.init(__webpack_share_scopes__.default);
  const factory = await container.get(opts.exposedModule);
  return factory() as T;
}

import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-mf-react-remote',
  imports: [CommonModule],
  templateUrl: './react-remote.html',
  styleUrl: './react-remote.css',
})
export class ReactRemote implements OnInit {
  hostRef = inject(ElementRef);

  async ngOnInit() {
    console.log('test');

    const opts = {
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      remoteName: 'reactRemote',
      exposedModule: './App',
    };

    try {
      const mod = await loadRemoteModule<any>(opts);
      // support both named and default export shapes
      const tag: string = mod.tag || mod.default?.tag;
      const ctor: CustomElementConstructor =
        mod.element || mod.default?.element;

      // if still not a constructor, try wrapping function
      if (ctor && typeof ctor !== 'function') {
        throw new Error(`Invalid element constructor for tag ${tag}`);
      }

      // define if missing
      if (tag && ctor && !customElements.get(tag)) {
        customElements.define(tag, ctor);
      }

      // append
      const el = document.createElement(tag);
      console.log('test',el);
      this.hostRef.nativeElement.querySelector('#container')?.appendChild(el);
    } catch (e) {
      console.error('Error loading remote custom element:', e);
    }
  }
}

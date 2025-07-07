import { setRemoteDefinitions } from '@nx/angular/mf';

fetch('/loadRemote.manifest.json')
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));


import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';
import { loadRemoteModule } from "@nx/angular/mf";
import { Remote1Component } from "../../../remote_1/src/app/remote-entry/main";
import { remoteRoutes } from "remote_1/Routes";


export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcome,
  },
  {
    path: 'remote-1',
    loadChildren: () => loadRemoteModule('remote_1', './Route').then((m) => m.appRoutes)
  }
];

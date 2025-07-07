import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./remote-entry/entry.routes').then(r => r.remoteRoutes),
  },
];

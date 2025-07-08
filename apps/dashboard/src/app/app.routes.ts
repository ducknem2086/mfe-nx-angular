import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';
import { loadRemoteModule } from "@nx/angular/mf";


export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcome,
  },
  {
    path: 'remote-1',
    loadChildren: () => loadRemoteModule('remote_1', './Route').then((m) => m.appRoutes).catch(() => {
      alert('Không thể vào được trang này do phần ứng dụng của app không tải được !')
    })
  }
];

import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'test-react',
    pathMatch:'full'
  },
  {
    path: 'test-react',
    loadComponent: () =>
      import('./features/react-remote').then((c) => c.ReactRemote),
  },
  {
    path: 'remote-1',
    loadChildren: () =>
      loadRemoteModule('remote_1', './Route')
        .then((m) => m.appRoutes)
        .catch(() => {
          alert(
            'Không thể vào được trang này do phần ứng dụng của app không tải được !'
          );
        }),
  },
];

import { Route } from '@angular/router';
import { Page1 } from "../pages/page1/page1";
import { Page2 } from "../pages/page2/page2";

export const remoteRoutes: Route[] = [{
  path: '',
  loadComponent: () => import('./main').then(c => c.Remote1Component),
  children: [
    {
      path: '',
      redirectTo: 'page1',
      pathMatch: 'full'
    },
    {
      path: 'page1',
      component: Page1
    }, {
      path: 'page2',
      component: Page2
    }
  ]
}];

import { Route } from '@angular/router';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { provideState } from '@ngrx/store';
import { ngrxFormsFeature } from '@ng-mf/store-data';
import { DOCUMENT, importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { remoteTranslateLoaderFactory } from '../../translate-factory';

export const remoteRoutes: Route[] = [{
  path: '',
  loadComponent: () => import('./main').then(c => c.Remote1Component),
  providers: [
    provideState(ngrxFormsFeature),
    importProvidersFrom([
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: remoteTranslateLoaderFactory,
          deps: [HttpClient, DOCUMENT]
        }
      })
    ])
  ],
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

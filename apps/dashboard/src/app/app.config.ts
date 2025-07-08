import {
  ApplicationConfig,
  ErrorHandler,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from "@angular/common/http";
import { GlobalErrorHandler } from "../error-handler";
import { provideStore } from "@ngrx/store";
import { provideEffects } from '@ngrx/effects';
import { ngrxFormsEffects, ngrxFormsFeature } from '../shared/store/index';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: ErrorHandler, useClass: GlobalErrorHandler
    },
    provideStore({
      ngrxForms: ngrxFormsFeature.reducer,
    }),
    provideEffects(ngrxFormsEffects),

    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(appRoutes),
  ],
};

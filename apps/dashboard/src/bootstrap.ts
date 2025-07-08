import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {initGlobalErrorListeners} from './global-error-provider'

initGlobalErrorListeners();

bootstrapApplication(App, appConfig).catch((err) => console.error(err));

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideState, provideStore } from '@ngrx/store';
import { ngrxFormsFeature } from './store/config';
import { provideEffects } from '@ngrx/effects';


@NgModule({
  imports: [CommonModule],
  providers: [
    provideStore(),
    provideState(ngrxFormsFeature),
    provideEffects()
  ]
})
export class TranslateLibModule {
}

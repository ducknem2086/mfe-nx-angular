import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { formsActions } from './config.actions';

export const setData$ = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(formsActions.setI18nData, formsActions.setCurrentDomain)
    );
  },
  { functional: true }
);

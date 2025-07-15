import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ThemeAction } from './theme.action';

export const setData$ = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(
        ThemeAction.setPrimaryColor,
        ThemeAction.setErrorColor,
        ThemeAction.setWarningColor,
        ThemeAction.setThemeConfig,
        ThemeAction.setSecondaryColor,
        ThemeAction.setBackgroundColor,
      )
    );
  },
  { functional: true }
);

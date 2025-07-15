import { createActionGroup, props } from '@ngrx/store';
import type { IThemeColorConfig } from './theme.interface';

export const ThemeAction = createActionGroup({
  source: 'theme',
  events: {
    setThemeConfig: props<{ theme: IThemeColorConfig }>(),
    setPrimaryColor: props<Pick<IThemeColorConfig, 'primary'>>(),
    setWarningColor: props<Pick<IThemeColorConfig, 'warning'>>(),
    setErrorColor: props<Pick<IThemeColorConfig, 'error'>>(),
    setSecondaryColor: props<Pick<IThemeColorConfig, 'secondary'>>(),
    setBackgroundColor: props<Pick<IThemeColorConfig, 'background'>>(),
  },
});

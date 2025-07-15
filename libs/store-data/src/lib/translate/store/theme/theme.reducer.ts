import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { ThemeAction } from './theme.action';
import { IThemeColorConfig } from './theme.interface';

export const themeConfigState: IThemeColorConfig = {
  error: '',
  primary: '',
  secondary: '',
  warning: '',
  background: '',
};

export const ngrxFormsFeature = createFeature({
  name: 'themeConfig',
  reducer: createReducer(
    themeConfigState,
    on(ThemeAction.setThemeConfig, (_, { theme }) => {
      return {
        ...theme,
      };
    }),
    on(ThemeAction.setWarningColor, (state, { warning }) => {
      return {
        ...state,
        warning,
      };
    }),
    on(ThemeAction.setPrimaryColor, (state, { primary }) => {
      return {
        ...state,
        primary,
      };
    }),
    on(ThemeAction.setSecondaryColor, (state, { secondary }) => {
      return {
        ...state,
        secondary,
      };
    }),
    on(ThemeAction.setErrorColor, (state, { error }) => {
      return {
        ...state,
        error,
      };
    }),
    on(ThemeAction.setBackgroundColor, (state, { background }) => {
      return {
        ...state,
        background,
      };
    })
  ),
  extraSelectors: ({ selectThemeConfigState }) => {
    return {
      selectI18nData: createSelector(selectThemeConfigState, (state) => {
        return state;
      }),
    };
  },
});

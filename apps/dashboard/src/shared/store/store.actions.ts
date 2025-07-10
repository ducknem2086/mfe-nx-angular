import { props, createActionGroup, emptyProps } from '@ngrx/store';

export const formsActions = createActionGroup({
  source: 'i18n',
  events: {
    setI18nData: props<{ status: 'en'|'vi' }>(),
  },
});

import { props, createActionGroup, emptyProps } from '@ngrx/store';

export const formsActions = createActionGroup({
  source: 'shared',
  events: {
    setI18nData: props<{ status: 'en'|'vi' }>(),
  },
});

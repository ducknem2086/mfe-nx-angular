import { props, createActionGroup, emptyProps } from '@ngrx/store';

export const formsActions = createActionGroup({
  source: 'Forms',
  events: {
    setI18nData: props<{ data: any }>(),
    updateI18nData: props<{ data: any }>(),
  },
});

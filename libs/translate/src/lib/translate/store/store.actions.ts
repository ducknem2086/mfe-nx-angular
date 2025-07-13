import { createActionGroup, props } from '@ngrx/store';

export const formsActions = createActionGroup({
  source: 'shared',
  events: {
    setI18nData: props<{ status: 'en' | 'vi' }>(),
    setCurrentDomain: props<{ domain: string }>()
  }
});

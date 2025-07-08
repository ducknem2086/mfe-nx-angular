import { formsActions } from './store.actions';
import { createFeature, createReducer, on } from '@ngrx/store';
import { Field } from "./store.interfaces";


export const ngrxFormsInitialState: Field = {
  i18nData: 'vi'
};

export const ngrxFormsFeature = createFeature({
  name: 'ngrxForms',
  reducer: createReducer(
    ngrxFormsInitialState,
    on(formsActions.setI18nData, (state, action) => ({...state, data: action.data})),
    on(formsActions.updateI18nData, (state, action) => {
      state.i18nData = action.data
      return {...state};
    }),
  ),
});

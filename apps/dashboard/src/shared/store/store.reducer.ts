import { formsActions } from './store.actions';
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Field } from './store.interfaces';

export const ngrxFormsInitialState: Field = {
  i18nData: 'vi',
};

export const ngrxFormsFeature = createFeature({
  name: 'ngrxI18n',
  reducer: createReducer(
    ngrxFormsInitialState,
    on(formsActions.setI18nData, (state, action) =>{
      console.log(action)
      return {
        ...state,
        i18nData: action.status
      }
    })
  ),
  extraSelectors: ({ selectI18nData }) => {
    return {
      selectI18nData: createSelector(selectI18nData, (state) => {
        return state;
      }),
    };
  },
});

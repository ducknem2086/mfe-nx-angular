import { formsActions } from './config.actions';
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { IStore } from './config.interfaces';

export const ngrxFormsInitialState: IStore = {
  i18nData: 'vi',
  currentDomain: ''
};

export const ngrxFormsFeature = createFeature({
  name: 'ngrxI18n',
  reducer: createReducer(
    ngrxFormsInitialState,
    on(formsActions.setI18nData, (state, action) => {
      console.log(action);
      return {
        ...state,
        i18nData: action.status
      };
    }),
    on(formsActions.setCurrentDomain, (state, action) => {
      return {
        ...state,
        currentDomain: action.domain
      };
    })
  ),
  extraSelectors: ({ selectI18nData, selectCurrentDomain }) => {
    return {
      selectI18nData: createSelector(selectI18nData, (state) => {
        return state;
      }),
      selectCurrentDomain: createSelector(selectCurrentDomain, (state) => {
        return state;
      })
    };
  }
});

import { ngrxFormsFeature } from './store.reducer';

export const {selectNgrxFormsState, selectI18nData} =
  ngrxFormsFeature;

export const ngrxFormsQuery = {
  selectNgrxFormsState,
};

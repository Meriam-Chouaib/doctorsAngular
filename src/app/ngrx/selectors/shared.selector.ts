import { createFeatureSelector, createSelector } from '@ngrx/store';
import {SHARED_STATE_NAME} from "../../constants/storeContstants";
import {SharedState} from "../states/shared.state";

const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getLoading = createSelector(getSharedState, (state) => {
  return state.showLoading;
});

export const getErrorMessage = createSelector(getSharedState, (state) => {
  return state.errorMessage;
});

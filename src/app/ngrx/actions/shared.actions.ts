import {createAction, props} from '@ngrx/store';
import {SET_ERROR_MESSAGE, SET_LOADING_ACTION} from "../../constants/storeContstants";

export const setLoadingSpinner = createAction(
  SET_LOADING_ACTION,
  props<{ status: boolean }>()
);

export const setErrorMessage = createAction(
  SET_ERROR_MESSAGE,
  props<{ message: string }>()
);

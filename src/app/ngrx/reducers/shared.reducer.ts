import { Action, createReducer, on} from '@ngrx/store';
import {AuthState, initialState} from "../states/login.state";
import {setErrorMessage, setLoadingSpinner} from "../actions/shared.actions";

const _sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(setErrorMessage, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  })
);

export function SharedReducer(state: AuthState | undefined, action: Action) {
  return _sharedReducer(state, action);
}

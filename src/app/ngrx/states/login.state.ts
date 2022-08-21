import {User} from "../../models/User";
import { createSelector } from '@ngrx/store';
import {AppState} from "./app.state";

export interface AuthState {
  user: User ;
}
export const initialState: AuthState = {
  user: new User(),
};



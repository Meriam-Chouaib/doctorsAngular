import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  LOGIN_ACTION,
  LOGOUT_ACTION,
  USER_UPDATE_PROFILE_RESET

} from '../../constants/userConstants';
import {createAction, props} from '@ngrx/store';
import {User} from "../../models/User";
import {POST_ADD_REQUEST} from "../../constants/postConstants";

export const postAddRequest = createAction(
  POST_ADD_REQUEST,
  props<{ title: string; message: string,picture: string,user:User,date:Date }>()
);
export const loginSuccess = createAction(
  USER_LOGIN_SUCCESS,
  props<{ user: User; redirect: boolean }>()
);

export const registerRequest = createAction(
  USER_REGISTER_REQUEST,
  props<{ name: string; username: string; password: string; picture: string }>()
);
export const registerSuccess = createAction(
  USER_REGISTER_SUCCESS,
  props<{ user: User; redirect: boolean }>()
);
export const autoLogin = createAction(LOGIN_ACTION);
export const autoLogout = createAction(LOGOUT_ACTION);

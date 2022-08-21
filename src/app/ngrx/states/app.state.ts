import {SharedState} from "./shared.state";
// import { UserState} from "./login.state";
import {SHARED_STATE_NAME} from "../../constants/storeContstants";
import {AUTH_STATE_NAME} from "../selectors/auth.selector";
import {AuthReducer} from "../reducers/user.reducer";
import {SharedReducer} from "../reducers/shared.reducer";
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import {AuthState} from "./login.state";
import {createSelector} from "@ngrx/store";
import {User} from "../../models/User";
import {Post} from "../../models/Post";

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  // [AUTH_STATE_NAME]: AuthState;
  router: RouterReducerState;
  // userIni: AuthState;
  selectedUser: User;
  allposts: Post[];

}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [AUTH_STATE_NAME]: AuthReducer,
  router: routerReducer,
};

export const selectUser = (state: AppState) => state.selectedUser;
export const selectAllPosts = (state: AppState) => state.allposts;

export const selectVisiblePosts = createSelector(
  selectUser,
  selectAllPosts,
  (selectedUser:User, allPosts:Post[]  )=>{
    if(selectedUser && allPosts){
      return allPosts.filter((post:Post) => post.user?._id === selectedUser._id);
    }
    else{
      return allPosts;
    }
  }

)

// export const selectUserData = createSelector(
//   selectedUser,
//   (state: AuthState) => state.user
// );

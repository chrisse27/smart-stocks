import { ActionTypes } from './../actions/index';
import { AppState } from './index';
import { FeedEntry } from './../feed/feed-entry';
import '@ngrx/core/add/operator/select';
import { ActionReducer, combineReducers, Action } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import * as fromRouter from '@ngrx/router-store';


/**
 * Note: Name of AppState needs to correspond to the name of the reducer.
 */
export interface AppState {
  news: FeedEntry[];
}

const initialState: AppState = {
  news: []
};

/**
 * Note: Name of AppState needs to correspond to the name of the reducer.
 */
// const reducers = {
//   isLoading: fromLoading.reducer,
//   authentication: fromAuthentication.reducer,
//   router: fromRouter.routerReducer,
//   profile: fromUser.reducer,
//   errorMessage: fromErrorMessage.reducer,
//   infoMessage: fromInfoMessage.reducer,
//   resolvers: fromResolvers.reducer,
//   profileSettings: fromProfile.reducer,
//   activeAccount: fromActiveAccount.reducer
// };

export function reducer(state = initialState, action: Action): AppState {
  switch (action.type) {
    case ActionTypes.SET_NEWS:
      return {
        ...state,
        news: action.payload
      };
    default:
      return state;
  }
}

// function resetStoreOnLogout(reducer: Function) {
//   return function (state, action) {
//     if (authenticationActions.ActionTypes.LOGOUT_SUCCESS === action.type) {
//       state = undefined;
//     }
//     return reducer(state, action);
//   };
// }
// const actionReducer: ActionReducer<AppState> = compose(resetStoreOnLogout, combineReducers)(reducers);

// export function reducer(state: any, action: any) {
//   return actionReducer(state, action);
// }

export const getNews = (state: AppState) => state.news;


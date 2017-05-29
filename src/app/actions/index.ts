import { FeedEntry } from './../feed/feed-entry';
import { Action } from '@ngrx/store';
import { type } from '../type-cache';


export const ActionTypes = {
  FETCH_NEWS: type('[News] Fetch'),
  SET_NEWS: type('[News] Set'),
};

export class FetchNewsAction implements Action {
  type = ActionTypes.FETCH_NEWS;

  constructor() {
  }
}

export class SetNewsAction implements Action {
  type = ActionTypes.SET_NEWS;

  constructor(public payload: FeedEntry[]) {
  }
}

export type AppAction
  = SetNewsAction;

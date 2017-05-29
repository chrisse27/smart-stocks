import { SetNewsAction } from './../actions/index';
import { RssFeedService } from './../rss-feed.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as routerStore from '@ngrx/router-store';
import { Store } from '@ngrx/store';

import { ActionTypes } from '../actions';
import { AppState } from '../reducers';

@Injectable()
export class AppEffects {

  @Effect()
  fetchNews$ = this.actions$
    .ofType(ActionTypes.FETCH_NEWS)
    .switchMap(() =>
      this.feed.getFeedContent('http://finance.yahoo.com/rss/headline?s=yhoo')
        .map(feed => feed.items)
        .map(news => new SetNewsAction(news))
    );

  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private feed: RssFeedService) {
  }
}

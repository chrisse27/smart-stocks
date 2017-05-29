import { AppState } from './reducers/index';
import { FetchNewsAction } from './actions/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { RssFeedService } from './rss-feed.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.store.dispatch(new FetchNewsAction());
  }
}

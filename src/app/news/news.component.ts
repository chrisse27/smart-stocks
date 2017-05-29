import { AppState, getNews } from './../reducers/index';
import { FeedEntry } from './../feed/feed-entry';
import { Observable } from 'rxjs/Observable';
import { RssFeedService } from './../rss-feed.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news$: Observable<FeedEntry[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.news$ = this.store.select(getNews);
  }

  openNews(news) {
    console.log(news);
  }
}

import { Observable } from 'rxjs/Observable';
import { RssFeedService } from './../rss-feed.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news$: Observable<any>;

  constructor(private feed: RssFeedService) {

  }

  ngOnInit(): void {
    this.news$ = this.feed.getFeedContent('http://finance.yahoo.com/rss/headline?s=yhoo')
      .map(feed => feed.items);

    this.news$.subscribe(items => {
      console.log(items);
    });
  }

  openNews(news) {
    console.log(news);
  }
}

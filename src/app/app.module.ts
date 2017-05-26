import { NewsComponent } from './news/news.component';
import { RssFeedService } from './rss-feed.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdSidenavModule, MdToolbarModule, MdListModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NewsContentComponent } from './news-content/news-content.component';

const routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: 'news/:id',
    component: NewsContentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MdSidenavModule,
    MdButtonModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule
  ],
  providers: [RssFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

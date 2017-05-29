import { AppEffects } from './effects/index';
import { MaterialModule } from './material/material.module';
import { NewsComponent } from './news/news.component';
import { RssFeedService } from './rss-feed.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { FeedCardComponent } from './feed/feed-card/feed-card.component';
import { reducer } from './reducers';

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
    NewsContentComponent,
    FeedCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    RouterStoreModule.connectRouter(),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(AppEffects),
    MaterialModule
  ],
  providers: [RssFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

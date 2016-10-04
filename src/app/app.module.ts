import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { FavoritePage } from '../pages/favorite/favorite';
import { MenuPage } from '../pages/menu/menu';
import { ResultsPage } from '../pages/results/results';
import { SearchPage } from '../pages/search/search';
import { TrackDetailPage } from '../pages/track-detail/track-detail';
import { Moment } from '../pipes/moment';
import { NativeMedia } from '../providers/native-media/native-media';
import { SpotifyService } from '../providers/spotify-service/spotify-service';
@NgModule({
  declarations: [
    MyApp,
    FavoritePage,
    MenuPage,
    ResultsPage,
    SearchPage,
    TrackDetailPage,
    Moment
  ],
  imports: [
    IonicModule.forRoot(MyApp, null, {
     links: [
        { component: MenuPage, name: '', segment: '' },
        { component: SearchPage, name: 'Search', segment: 'search' },
        { component: ResultsPage, name: 'Results', segment: 'results' },
        { component: TrackDetailPage, name: 'Detail', segment: ':track' },
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritePage,
    MenuPage,
    ResultsPage,
    SearchPage,
    TrackDetailPage
  ],
  providers: [SpotifyService, NativeMedia]
})
export class AppModule { }

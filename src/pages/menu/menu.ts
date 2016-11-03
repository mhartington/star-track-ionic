import { NavController, Nav } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { SearchPage } from '../search/search';
import { TrackDetailPage } from '../track-detail/track-detail';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild('content') content: Nav;

  public menuRoot = SearchPage;
  public favorites;
  constructor(
    public nav: NavController,
    public storage: Storage
  ) {
    let src = Observable.fromPromise(this.storage.keys());
    src.subscribe(
      (res) => {
        this.favorites = res;
      },
      err => console.log(err),
      () => console.log('done')
    );
  }
  goToDetail(favorite) {
    this.content.push(TrackDetailPage, {
      'track': favorite
    });
  }
  openPage(page) {
    this.content.setRoot(page.component);
  }
}

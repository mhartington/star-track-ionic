import { IonicPage, NavController, Nav, Events } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
@IonicPage({
  segment: 'menu'
})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild('content') content: Nav;
  public menuRoot = 'SearchPage';
  public favorites = [];
  constructor(
    public nav: NavController,
    public storage: Storage,
    public event: Events
  ) {
    this.getKeys();
    this.event.subscribe('songAdded', (e) => {
      this.favorites.push(e);
    });
    this.event.subscribe('songRemoved', (e) => {
      this.favorites.splice(this.favorites.indexOf(e), 1);
    });
  }

  goToDetail(favorite) {
    this.content.push('TrackDetailPage', {
      'id': favorite.id,
      'track': favorite
    });
  }
  openPage(page) {
    this.content.setRoot(page.component);
  }
  getKeys() {
    this.storage.forEach(entry => {
      this.favorites.push(entry);
    });
  }
}

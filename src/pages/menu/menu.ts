import { IonicPage, Menu, NavController, Nav, Events } from 'ionic-angular';
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
  @ViewChild(Menu) menu: Menu;
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
    this.menu.close().then(() => {
      this.content.push('TrackDetailPage', {
        'id': favorite.trackId,
      });
    })
  }
  openPage(page) {
    this.content.setRoot(page.component);
  }
  getKeys() {
    this.storage.forEach(entry => {
      console.log(entry)
      this.favorites.push(entry);
    });
  }
}

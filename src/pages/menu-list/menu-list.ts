import { Component } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-menu-list',
  templateUrl: 'menu-list.html',
  preserveWhitespaces: false
})
export class MenuListPage {
  public favorites = [];
  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public event: Events
  ) { }

  ionViewDidLoad() {
    this.getKeys();
    this.event.subscribe('songAdded', e => {
      this.favorites.push(e);
    });
    this.event.subscribe('songRemoved', e => {
      console.log(e)
      this.favorites.splice(this.favorites.indexOf(e), 1);
    });
  }

  getKeys() {
    this.storage.forEach(entry => {
      this.favorites.push(entry);
    });
  }

  goToDetail(favorite) {
    let mainNav = this.navCtrl.parent._children.find(e => e.name === 'main')
    mainNav.push('TrackDetailPage', {
      id: favorite.trackId,
      track: favorite
    });
  }
}

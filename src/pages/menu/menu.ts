import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@IonicPage({
  segment: 'menu'
})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  public favorites = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public event: Events) {
  }

  ionViewDidLoad() {
    this.getKeys();
    this.event.subscribe('songAdded', (e) => {
      this.favorites.push(e);
    });
    this.event.subscribe('songRemoved', (e) => {
      this.favorites.splice(this.favorites.indexOf(e), 1);
    });
  }

  getKeys() {
    this.storage.forEach(entry => {
      this.favorites.push(entry);
    });
  }

  goToDetail(favorite) {
    this.navCtrl.push('TrackDetailPage', {
      'id': favorite.trackId,
    });
  }
}

import { Component, ViewChild } from '@angular/core';
import {
  NavController,
  NavParams,
  Events,
  ToastController,
  IonicPage
} from 'ionic-angular';
import { NativeMedia } from '../../providers/native-media/native-media';
import { Storage } from '@ionic/storage';
import { ItunesService } from '../../providers/itunes-service/itunes-service';
@IonicPage({
  defaultHistory: ['SearchPage'],
  segment: 'detail/:id'
})
@Component({
  selector: 'page-track-detail',
  templateUrl: 'track-detail.html'
})
export class TrackDetailPage {
  @ViewChild('musicCard') musicCard;
  track = {
    trackName: '',
    artistName: '',
    collectionName: '',
    artworkUrl100: ''
  }
  isFavorite = false;
  favoriteIcon = 'star-outline';

  constructor(
    public nav: NavController,
    public params: NavParams,
    public events: Events,
    public nativeMedia: NativeMedia,
    public storage: Storage,
    public toastCtrl: ToastController,
    public service: ItunesService
  ) {}
  ionViewDidEnter() {
    let paramsTrack = this.params.get('track');
    if (!paramsTrack) {
      this.loadSong();
    } else {
      this.track = paramsTrack;
      this.checkStorage()
    }
  }
  loadSong() {
    let id = this.params.get('id');
    this.service
      .loadSong(id)
      .subscribe(
        res => (this.track = res.results[0]),
        err => console.log(err),
        () => this.checkStorage()
      );
  }
  checkStorage() {
    this.storage.get(this.track.trackId).then(res => {
      if (!res) {
        this.isFavorite = false;
        this.favoriteIcon = 'star-outline';
      } else {
        this.isFavorite = true;
        this.favoriteIcon = 'star';
      }
    });
  }
  toggleFavorites() {
    let addedToast = {
      message: 'Song added to Favorites',
      duration: 3000,
      position: 'bottom'
    };
    let removedToast = {
      message: 'Song remove to Favorites',
      duration: 3000,
      position: 'bottom'
    };
    if (!this.isFavorite) {
      let toast = this.toastCtrl.create(addedToast);
      toast.present();
      this.isFavorite = true;
      this.favoriteIcon = 'star';
      this.storage.set(this.track.trackId, this.track);
      this.events.publish('songAdded', this.track);
    } else {
      let toast = this.toastCtrl.create(removedToast);
      toast.present();
      this.storage.remove(this.track.trackId);
      this.isFavorite = false;
      this.favoriteIcon = 'star-outline';
      this.events.publish('songRemoved', this.track);
    }
  }
  ionViewWillLeave() {
    this.musicCard.stopSong();
    this.nativeMedia.destroy();
  }
}

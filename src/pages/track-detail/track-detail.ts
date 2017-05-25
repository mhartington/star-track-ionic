import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Events, ToastController, IonicPage } from 'ionic-angular';
import { NativeMedia } from '../../providers/native-media/native-media';
import { Storage } from '@ionic/storage';
import { Howl } from 'howler'
import { SpotifyService } from '../../providers/spotify-service/spotify-service'
@IonicPage({
  defaultHistory: ['SearchPage'],
  segment: 'detail/:id'
})
@Component({
  selector: 'page-track-detail',
  templateUrl: 'track-detail.html',
})
export class TrackDetailPage {
  @ViewChild('musicCard') musicCard;
  track;
  progress;
  ifPlaying = false;
  isFavorite = false;
  favoriteIcon = 'star-outline';
  player: Howl;
  isSeeking: boolean = false;

  constructor(
    public nav: NavController,
    public params: NavParams,
    public events: Events,
    public nativeMedia: NativeMedia,
    public storage: Storage,
    public toastCtrl: ToastController,
    public service: SpotifyService
  ) { }
  ionViewWillEnter() {
    let id = this.params.get('id');
    this.service.loadSong(id).subscribe(
      res => this.track = res,
      err => console.log(err),
      () => this.checkStorage()

    )
  }
  checkStorage() {
    this.storage.get(this.track.id).then((res) => {
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
      this.storage.set(this.track.id, this.track);
      this.events.publish('songAdded', this.track);
    } else {
      let toast = this.toastCtrl.create(removedToast);
      toast.present();
      this.storage.remove(this.track.id);
      this.isFavorite = false;
      this.favoriteIcon = 'star-outline';
      this.events.publish('songRemoved', this.track);
    }
  }
  ionViewWillLeave() {
    this.musicCard.stopSong()
    this.nativeMedia.destroy()
  }
}

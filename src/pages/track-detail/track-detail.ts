import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { NativeMedia } from '../../providers/native-media/native-media';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-track-detail',
  templateUrl: 'track-detail.html',
})
export class TrackDetailPage {
  track = this.params.get('track');
  progress = 0;
  @ViewChild('player') audio;
  ifPlaying = false;
  isFavorite = false;
  favoriteIcon = 'star-outline';
  constructor(
    public nav: NavController,
    public params: NavParams,
    public events: Events,
    public nativeMedia: NativeMedia,
    public storage: Storage,
    public toastCtrl: ToastController
  ) {
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
  ionViewWillLeave() {
    this.stopSong();
  }
  toggleSong() {
    if (this.ifPlaying) {
      this.stopSong();
    } else {
      this.playSong();
    }
  }
  playSong() {
    this.nativeMedia.createMediaControls(this.track);
    this.ifPlaying = true;
    this.audio.nativeElement.play();
  }
  stopSong() {
    this.nativeMedia.destroy();
    this.ifPlaying = false;
    this.audio.nativeElement.currentTime = 0;
    this.audio.nativeElement.pause();
  }
  setProgress() {
    this.progress = Math.round((this.audio.nativeElement.currentTime / this.audio.nativeElement.duration) * 100);
  }
  playerEnded() {
    this.ifPlaying = false;
    this.nativeMedia.destroy();
    this.audio.nativeElement.currentTime = 0;
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
    this.storage.get(this.track.id).then((res) => {
      if (!res) {
        let toast = this.toastCtrl.create(addedToast);
        toast.present();
        this.isFavorite = true;
        this.favoriteIcon = 'star';
        this.storage.set(this.track.id, this.track);
      } else {
        let toast = this.toastCtrl.create(removedToast);
        toast.present();
        this.storage.remove(this.track.id);
        this.isFavorite = false;
        this.favoriteIcon = 'star-outline';
      }
    });
  }
}

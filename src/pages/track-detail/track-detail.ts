import { Component } from '@angular/core';
import { NavController, NavParams, Events, ToastController, IonicPage } from 'ionic-angular';
import { NativeMedia } from '../../providers/native-media/native-media';
import { Storage } from '@ionic/storage';
import { Howl } from 'howler'

@IonicPage({
  defaultHistory: ['SearchPage'],
  segment: 'detail/:id'
})
@Component({
  selector: 'page-track-detail',
  templateUrl: 'track-detail.html',
})
export class TrackDetailPage {
  track = this.params.get('track');
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
  ionViewWillEnter() {
    this.player = new Howl({
      src: [this.track.preview_url],
      format: ['mp3'],
      html5: true,
      onplay: () => {
        requestAnimationFrame(this.setProgress.bind(this))
      },
      onend: () => {
        this.playerEnded();
      }
    })
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
    this.player.play();
    this.ifPlaying = true;
    this.nativeMedia.createMediaControls(this.track);
  }
  stopSong() {
    this.ifPlaying = false;
    this.player.stop()
    this.nativeMedia.destroy();
  }
  setProgress() {
    if (!this.isSeeking) {
      let seek: any = this.player.seek();
      this.progress = (((seek / this.player.duration()) * 100) || 0);
      requestAnimationFrame(this.setProgress.bind(this));
    }
  }
  seek(val) {
    this.isSeeking = false;
    let duration = this.player.duration();
    this.player.seek(duration * (val / 100));
    requestAnimationFrame(this.setProgress.bind(this));
  }
  handleDrag() {
    this.isSeeking = true;
  }
  playerEnded() {
    this.ifPlaying = false;
    this.nativeMedia.destroy();
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
}

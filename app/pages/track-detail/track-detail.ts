import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Events, Storage, LocalStorage} from 'ionic-angular';
import {Moment} from '../../pipes/moment'
import {SpotifyService} from '../../providers/spotify-service/spotify-service'
@Component({
  templateUrl: 'build/pages/track-detail/track-detail.html',
  pipes: [Moment],
  providers: [SpotifyService]
})
export class TrackDetailPage {
  track = this.params.get('track');
  progress = 0;
  @ViewChild('player') audio;

  ifPlaying = false;
  constructor(
    private nav: NavController,
    private params: NavParams,
    private events: Events,
    private spotify: SpotifyService
  ) {
    console.log(this.track.preview_url)
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
    this.ifPlaying = true
    this.audio.nativeElement.play();
  }
  stopSong() {
    this.ifPlaying = false
    this.audio.nativeElement.currentTime = 0;
    this.audio.nativeElement.pause();
  }
  setProgress() {
    this.progress = Math.round((this.audio.nativeElement.currentTime / this.audio.nativeElement.duration) * 100);
  }

  playerEnded() {
    this.ifPlaying = false
    this.audio.nativeElement.currentTime = 0;
  }

  favorite() {
    this.spotify.favorites.push(this.track)
    console.log(this.spotify.favorites)
  }
}

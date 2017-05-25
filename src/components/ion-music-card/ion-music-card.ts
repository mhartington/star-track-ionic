import { Component, Input } from '@angular/core';
import { NativeMedia } from '../../providers/native-media/native-media';
import { Howl } from 'howler'
@Component({
  selector: 'ion-music-card',
  templateUrl: 'ion-music-card.html'
})
export class IonMusicCardComponent {
  _track;
  @Input()
  get track(){
    return this._track
  }
  set track(val: any){
    this._track = val
  }

  progress;
  ifPlaying = false;
  isFavorite = false;
  favoriteIcon = 'star-outline';
  player: Howl;
  isSeeking: boolean = false;

  constructor(public nativeMedia: NativeMedia) {}
  ngOnInit() {
    this.player = new Howl({
      src: [this._track.preview_url],
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
  toggleSong() {
    if (this.ifPlaying) {
      this.stopSong();
    } else {
      this.playSong();
    }
  }
  playSong() {
    this.nativeMedia.createMediaControls(this._track);
    this.player.play();
    this.ifPlaying = true;
  }
  stopSong() {
    this.ifPlaying = false;
    this.player.stop()
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
  }
}

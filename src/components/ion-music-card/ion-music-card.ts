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
  get track() {
    return this._track
  }
  set track(val: any) {
    this._track = val
  }

  get fullImage(): string {
    return this.track.artworkUrl100.replace(/100x100bb/, '500x500bb')
  }

  progress;
  ifPlaying = false;
  isFavorite = false;
  favoriteIcon = 'star-outline';
  player: Howl;
  isSeeking: boolean = false;

  constructor(public nativeMedia: NativeMedia) { }
  ngOnInit() {
    this.player = new Howl({
      src: [this._track.previewUrl],
      onplay: () => {
        requestAnimationFrame(this.setProgress.bind(this))
      },
      onend: () => {
        this.playerEnded();
      }
    })
  }
  // ngOnDestroy(){
  //   this.player.unload()
  // }
  toggleSong() {
    if (this.ifPlaying) {
      this.stopSong();
    } else {
      this.playSong();
    }
  }

  playSong() {
    // this.nativeMedia.createMediaControls(this._track);
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

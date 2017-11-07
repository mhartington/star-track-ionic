import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import {
  MusicControls,
  MusicControlsOptions
} from '@ionic-native/music-controls';
@Injectable()
export class NativeMedia {
  constructor(public platform: Platform, public musicControls: MusicControls) {}
  createMediaControls(track) {
    let options: MusicControlsOptions = {
      track: track.trackName,
      artist: track.artistName,
      cover: track.artworkUrl100,
      isPlaying: true,
      dismissable: false,
      hasPrev: false,
      hasNext: false,
      ticker: `Now playing: ${track.trackName}`,
      hasClose: true,
      album: track.collectionName,
      duration: 0,
      elapsed: 0
    };
    this.musicControls.create(options);
  }
  onError(e) {
    console.log(e);
  }
  onSuccess(e) {
    console.log(e);
  }
  destroy() {
    if (this.platform.is('cordova')) {
      this.musicControls.destroy();
    }
  }
}

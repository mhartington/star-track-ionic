import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
declare var MusicControls: any;
declare var remoteControls: any;
@Injectable()
export class NativeMedia {

  constructor(
    public platform: Platform
  ) { }

  createMediaControls(track) {
    if (this.platform.is('cordova') && this.platform.is('ios')) {
      remoteControls.updateMetas(function(success) {
        console.log(success);
      }, function(fail) {
        console.log(fail);
      }, [track.artists[0].name, track.name, track.album.name, track.album.images[0].url, '30', '30']);
    } if (this.platform.is('cordova') && this.platform.is('android')) {
      // android MusicControls
      MusicControls.create({
        track: track.name,
        artist: track.artists[0].name,
        cover: track.album.images[0].url,
        isPlaying: true,
        dismissable: false,
        hasPrev: false,
        hasNext: false,
        ticker: 'Now playing: ' + track.name
      }, this.onSuccess, this.onError);

    } else {
      return;
    }

  }

  onError(e) {
    console.log(e);

  }
  onSuccess(e) {
    console.log(e);
  }

  destroy() {
    if (this.platform.is('cordova') && this.platform.is('android')) {
      MusicControls.destroy(this.onSuccess, this.onError);
    }
  }

}

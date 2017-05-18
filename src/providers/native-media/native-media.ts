import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { MusicControls, MusicControlsOptions } from '@ionic-native/music-controls';
import 'rxjs/add/operator/map';
@Injectable()
export class NativeMedia {

    constructor(
        public platform: Platform,
        public musicControls: MusicControls
    ) { }

    createMediaControls(track) {
        let options: MusicControlsOptions = {
            track: track.name,
            artist: track.artists[0].name,
            cover: track.album.images[0].url,
            isPlaying: true,
            dismissable: false,
            hasPrev: false,
            hasNext: false,
            ticker: `Now playing: ${track.name}`,
            hasClose: true,
            album: track.album.name,
            duration: 0,
            elapsed: 0
        }
        this.musicControls.create(options)

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

import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
export var NativeMedia = (function () {
    function NativeMedia(platform) {
        this.platform = platform;
    }
    NativeMedia.prototype.createMediaControls = function (track) {
        if (this.platform.is('cordova') && this.platform.is('ios')) {
            remoteControls.updateMetas(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            }, [track.artists[0].name, track.name, track.album.name, track.album.images[0].url, '30', '30']);
        }
        if (this.platform.is('cordova') && this.platform.is('android')) {
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
        }
        else {
            return;
        }
    };
    NativeMedia.prototype.onError = function (e) {
        console.log(e);
    };
    NativeMedia.prototype.onSuccess = function (e) {
        console.log(e);
    };
    NativeMedia.prototype.destroy = function () {
        MusicControls.destroy(this.onSuccess, this.onError);
    };
    NativeMedia.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NativeMedia.ctorParameters = [
        { type: Platform, },
    ];
    return NativeMedia;
}());

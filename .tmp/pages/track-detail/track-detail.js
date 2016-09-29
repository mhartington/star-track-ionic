import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { NativeMedia } from '../../providers/native-media/native-media';
export var TrackDetailPage = (function () {
    function TrackDetailPage(nav, params, events, nativeMedia) {
        this.nav = nav;
        this.params = params;
        this.events = events;
        this.nativeMedia = nativeMedia;
        this.track = this.params.get('track');
        this.progress = 0;
        this.ifPlaying = false;
    }
    TrackDetailPage.prototype.ionViewWillLeave = function () {
        this.stopSong();
    };
    TrackDetailPage.prototype.toggleSong = function () {
        if (this.ifPlaying) {
            this.stopSong();
        }
        else {
            this.playSong();
        }
    };
    TrackDetailPage.prototype.playSong = function () {
        // this.nativeMedia.createMediaControls(this.track);
        this.ifPlaying = true;
        this.audio.nativeElement.play();
    };
    TrackDetailPage.prototype.stopSong = function () {
        this.ifPlaying = false;
        this.audio.nativeElement.currentTime = 0;
        this.audio.nativeElement.pause();
    };
    TrackDetailPage.prototype.setProgress = function () {
        this.progress = Math.round((this.audio.nativeElement.currentTime / this.audio.nativeElement.duration) * 100);
    };
    TrackDetailPage.prototype.playerEnded = function () {
        this.ifPlaying = false;
        this.audio.nativeElement.currentTime = 0;
    };
    TrackDetailPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-track-detail',
                    templateUrl: 'track-detail.html',
                },] },
    ];
    /** @nocollapse */
    TrackDetailPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: Events, },
        { type: NativeMedia, },
    ];
    TrackDetailPage.propDecorators = {
        'audio': [{ type: ViewChild, args: ['player',] },],
    };
    return TrackDetailPage;
}());

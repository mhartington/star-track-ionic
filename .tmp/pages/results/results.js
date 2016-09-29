import { NavParams, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { SpotifyService } from '../../providers/spotify-service/spotify-service';
import { TrackDetailPage } from '../track-detail/track-detail';
export var ResultsPage = (function () {
    function ResultsPage(params, spotify, nav) {
        var _this = this;
        this.params = params;
        this.spotify = spotify;
        this.nav = nav;
        this.query = this.params.get('search');
        this.listing = [];
        this.spotify.load(this.query).subscribe(function (res) { return _this.listing = res.tracks.items; }, function (err) { return console.log(err); });
    }
    ResultsPage.prototype.detail = function (track) {
        this.nav.push(TrackDetailPage, {
            'track': track
        });
    };
    ResultsPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-results',
                    templateUrl: 'results.html',
                },] },
    ];
    /** @nocollapse */
    ResultsPage.ctorParameters = [
        { type: NavParams, },
        { type: SpotifyService, },
        { type: NavController, },
    ];
    return ResultsPage;
}());

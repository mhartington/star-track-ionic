import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export var SpotifyService = (function () {
    function SpotifyService(http) {
        this.http = http;
        this.favorites = [];
    }
    SpotifyService.prototype.load = function (query) {
        if (query.filter === 'everything') {
            return this.http.get("https://api.spotify.com/v1/search?q=" + encodeURIComponent(query.term) + "&limit=25&type=track")
                .map(function (res) { return res.json(); });
        }
        else {
            return this.http.get("https://api.spotify.com/v1/search?q=" + query.filter + "%3A" + encodeURIComponent(query.term) + "&limit=25&type=track")
                .map(function (res) { return res.json(); });
        }
    };
    SpotifyService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SpotifyService.ctorParameters = [
        { type: Http, },
    ];
    return SpotifyService;
}());

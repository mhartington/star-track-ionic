webpackJsonp([0],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__track_detail__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_time_pipes_time_pipes_module__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackDetailPageModule", function() { return TrackDetailPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TrackDetailPageModule = (function () {
    function TrackDetailPageModule() {
    }
    return TrackDetailPageModule;
}());
TrackDetailPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__track_detail__["a" /* TrackDetailPage */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__pipes_time_pipes_time_pipes_module__["a" /* TimePipeModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__track_detail__["a" /* TrackDetailPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_1__track_detail__["a" /* TrackDetailPage */]
        ]
    })
], TrackDetailPageModule);

//# sourceMappingURL=track-detail.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsToMinutes; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MsToMinutes = (function () {
    function MsToMinutes() {
    }
    MsToMinutes.prototype.transform = function (value) {
        return this.durationFromMsHelper(value);
    };
    MsToMinutes.prototype.pad2 = function (num) {
        if (num <= 99) {
            num = ('0' + num).slice(-2);
        }
        return num;
    };
    MsToMinutes.prototype.durationFromMsHelper = function (ms) {
        // if (typeof ms != 'number') {
        //   return '';
        // }
        var x = ms / 1000;
        var seconds = this.pad2(Math.floor(x % 60));
        x /= 60;
        var minutes = this.pad2(Math.floor(x % 60));
        x /= 60;
        var hours = Math.floor(x % 24);
        var newHours = hours ? this.pad2(hours) + ':' : '';
        return newHours + minutes + ':' + seconds;
    };
    return MsToMinutes;
}());
MsToMinutes = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Pipe */])({
        name: 'msToMinutes'
    })
], MsToMinutes);

//# sourceMappingURL=ms-to-minutes.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ms_to_minutes__ = __webpack_require__(312);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimePipeModule = (function () {
    function TimePipeModule() {
    }
    return TimePipeModule;
}());
TimePipeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__ms_to_minutes__["a" /* MsToMinutes */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__ms_to_minutes__["a" /* MsToMinutes */]]
    })
], TimePipeModule);

//# sourceMappingURL=time-pipes.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_native_media_native_media__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackDetailPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrackDetailPage = (function () {
    function TrackDetailPage(nav, params, events, nativeMedia, storage, toastCtrl) {
        var _this = this;
        this.nav = nav;
        this.params = params;
        this.events = events;
        this.nativeMedia = nativeMedia;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.track = this.params.get('track');
        this.progress = 0;
        this.ifPlaying = false;
        this.isFavorite = false;
        this.favoriteIcon = 'star-outline';
        this.storage.get(this.track.id).then(function (res) {
            if (!res) {
                _this.isFavorite = false;
                _this.favoriteIcon = 'star-outline';
            }
            else {
                _this.isFavorite = true;
                _this.favoriteIcon = 'star';
            }
        });
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
        this.nativeMedia.createMediaControls(this.track);
        this.ifPlaying = true;
        this.audio.nativeElement.play();
    };
    TrackDetailPage.prototype.stopSong = function () {
        this.nativeMedia.destroy();
        this.ifPlaying = false;
        this.audio.nativeElement.currentTime = 0;
        this.audio.nativeElement.pause();
    };
    TrackDetailPage.prototype.setProgress = function () {
        this.progress = Math.round((this.audio.nativeElement.currentTime / this.audio.nativeElement.duration) * 100);
    };
    TrackDetailPage.prototype.playerEnded = function () {
        this.ifPlaying = false;
        this.nativeMedia.destroy();
        this.audio.nativeElement.currentTime = 0;
    };
    TrackDetailPage.prototype.toggleFavorites = function () {
        var _this = this;
        var addedToast = {
            message: 'Song added to Favorites',
            duration: 3000,
            position: 'bottom'
        };
        var removedToast = {
            message: 'Song remove to Favorites',
            duration: 3000,
            position: 'bottom'
        };
        this.storage.get(this.track.id).then(function (res) {
            if (!res) {
                var toast = _this.toastCtrl.create(addedToast);
                toast.present();
                _this.isFavorite = true;
                _this.favoriteIcon = 'star';
                _this.storage.set(_this.track.id, _this.track);
            }
            else {
                var toast = _this.toastCtrl.create(removedToast);
                toast.present();
                _this.storage.remove(_this.track.id);
                _this.isFavorite = false;
                _this.favoriteIcon = 'star-outline';
            }
        });
    };
    return TrackDetailPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewChild */])('player'),
    __metadata("design:type", Object)
], TrackDetailPage.prototype, "audio", void 0);
TrackDetailPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        segment: 'detail/:id'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'page-track-detail',template:/*ion-inline-start:"/Users/mhartington/GitHub/StarTrack-Ionic/src/pages/track-detail/track-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{track.name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="toggleFavorites()" >\n        <ion-icon [name]="favoriteIcon"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-card>\n      <img [src]="track.album.images[0].url" alt="">\n      <ion-card-content>\n        <ion-card-title>\n          <h2>{{track.name}}</h2>\n        </ion-card-title>\n        <h3>by {{track.artists[0].name}}</h3>\n        <em>{{track.album.name}}</em>\n\n        <ion-grid>\n\n        <ion-row>\n          <ion-col col-3 text-center>\n            <button color="light" ion-fab (click)="toggleSong()">\n              <ion-icon color="secondary" name="play" *ngIf="!ifPlaying"></ion-icon>\n              <ion-icon color="secondary" name="square" *ngIf="ifPlaying"></ion-icon>\n            </button>\n          </ion-col>\n\n          <ion-col col-9>\n            <audio [src]="track.preview_url" (ended)="playerEnded()" (timeupdate)="setProgress()" #player></audio>\n            <progress [value]="progress" max="100" class="progress"></progress>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n      </ion-card-content>\n\n      <ion-item>\n        <p>Track Duration</p>\n        <ion-note item-right>\n          {{track.duration_ms | msToMinutes}}\n        </ion-note>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mhartington/GitHub/StarTrack-Ionic/src/pages/track-detail/track-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__providers_native_media_native_media__["a" /* NativeMedia */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
], TrackDetailPage);

//# sourceMappingURL=track-detail.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map
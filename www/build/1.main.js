webpackJsonp([1],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_time_pipes_time_pipes_module__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    return SearchPageModule;
}());
SearchPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__search__["a" /* SearchPage */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__pipes_time_pipes_time_pipes_module__["a" /* TimePipeModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__search__["a" /* SearchPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_1__search__["a" /* SearchPage */]
        ]
    })
], SearchPageModule);

//# sourceMappingURL=search.module.js.map

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

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_spotify_service_spotify_service__ = __webpack_require__(246);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPage = (function () {
    function SearchPage(nav, spotify, loadingCtrl) {
        this.nav = nav;
        this.spotify = spotify;
        this.loadingCtrl = loadingCtrl;
        this.listing = [];
        this.isError = false;
        this.showSpinner = false;
    }
    SearchPage.prototype.detail = function (track) {
        this.nav.push('TrackDetailPage', {
            'id': track.id,
            'track': track
        });
    };
    SearchPage.prototype.doSearch = function (term) {
        var _this = this;
        this.showSpinner = true;
        if (term) {
            this.spotify.load(term)
                .subscribe(function (results) { return _this.listing = results.tracks.items; }, function (error) { return _this.isError = true; }, function () { return _this.showSpinner = false; });
        }
        else {
            this.listing = [];
            this.showSpinner = false;
        }
    };
    return SearchPage;
}());
SearchPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* IonicPage */])({
        segment: 'search'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/mhartington/GitHub/StarTrack-Ionic/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-searchbar\n      showCancelButton="true" (ionInput)="doSearch($event.target.value)">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="isError" text-center padding>\n    <ion-icon color="secondary" name="warning" big></ion-icon>\n    <h1>Uh-oh...</h1>\n    <h2>It\'s not me, it\'s you!</h2>\n    <h2>It appears there is a connection problem</h2>\n  </div>\n  <div padding text-center class="stauts-spinner" *ngIf="showSpinner">\n    <ion-spinner></ion-spinner>\n  </div>\n  <a ion-item *ngFor="let track of listing" detail-none (click)="detail(track)">\n    <ion-thumbnail item-left>\n      <img [src]="track.album.images[0].url" alt="">\n    </ion-thumbnail>\n    <h2>{{track.name}}</h2>\n    <h3>{{track.artists[0].name}}</h3>\n    <p>{{track.album.name}}</p>\n    <ion-note item-right>\n      {{track.duration_ms | msToMinutes}}\n    </ion-note>\n  </a>\n</ion-content>\n'/*ion-inline-end:"/Users/mhartington/GitHub/StarTrack-Ionic/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_spotify_service_spotify_service__["a" /* SpotifyService */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* LoadingController */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map
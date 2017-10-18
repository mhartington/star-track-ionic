webpackJsonp([3],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListPageModule", function() { return MenuListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_list__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuListPageModule = /** @class */ (function () {
    function MenuListPageModule() {
    }
    MenuListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_list__["a" /* MenuListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_list__["a" /* MenuListPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__menu_list__["a" /* MenuListPage */]
            ]
        })
    ], MenuListPageModule);
    return MenuListPageModule;
}());

//# sourceMappingURL=menu-list.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuListPage = /** @class */ (function () {
    function MenuListPage(navCtrl, storage, event) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.event = event;
        this.favorites = [];
    }
    MenuListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getKeys();
        this.event.subscribe('songAdded', function (e) {
            _this.favorites.push(e);
        });
        this.event.subscribe('songRemoved', function (e) {
            console.log(e);
            _this.favorites.splice(_this.favorites.indexOf(e), 1);
        });
    };
    MenuListPage.prototype.getKeys = function () {
        var _this = this;
        this.storage.forEach(function (entry) {
            _this.favorites.push(entry);
        });
    };
    MenuListPage.prototype.goToDetail = function (favorite) {
        var mainNav = this.navCtrl.parent._children.find(function (e) { return e.name === 'main'; });
        mainNav.push('TrackDetailPage', {
            id: favorite.trackId,
            track: favorite
        });
    };
    MenuListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-menu-list',template:/*ion-inline-start:"/Users/mhartington/GitHub/StarTrack-Ionic/src/pages/menu-list/menu-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Favorites</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <a ion-item *ngFor="let favorite of favorites" (click)="goToDetail(favorite)" menuClose>\n      <ion-label>\n        <h2>{{favorite.trackName}}</h2>\n        <h3>by {{favorite.artistName}}</h3>\n      </ion-label>\n    </a>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mhartington/GitHub/StarTrack-Ionic/src/pages/menu-list/menu-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], MenuListPage);
    return MenuListPage;
}());

//# sourceMappingURL=menu-list.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
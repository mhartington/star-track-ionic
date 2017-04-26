webpackJsonp([2],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = (function () {
    function MenuPageModule() {
    }
    return MenuPageModule;
}());
MenuPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__menu__["a" /* MenuPage */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__menu__["a" /* MenuPage */])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__menu__["a" /* MenuPage */]]
    })
], MenuPageModule);

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuPage = (function () {
    function MenuPage(nav, storage, event) {
        var _this = this;
        this.nav = nav;
        this.storage = storage;
        this.event = event;
        this.menuRoot = 'SearchPage';
        this.favorites = [];
        this.getKeys();
        this.event.subscribe('songAdded', function (e) {
            _this.favorites.push(e);
        });
        this.event.subscribe('songRemoved', function (e) {
            _this.favorites.splice(_this.favorites.indexOf(e), 1);
        });
    }
    MenuPage.prototype.goToDetail = function (favorite) {
        var _this = this;
        this.menu.close().then(function () {
            _this.content.push('TrackDetailPage', {
                'id': favorite.id,
                'track': favorite
            });
        });
    };
    MenuPage.prototype.openPage = function (page) {
        this.content.setRoot(page.component);
    };
    MenuPage.prototype.getKeys = function () {
        var _this = this;
        this.storage.forEach(function (entry) {
            _this.favorites.push(entry);
        });
    };
    return MenuPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_10" /* ViewChild */])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* Nav */])
], MenuPage.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Menu */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Menu */])
], MenuPage.prototype, "menu", void 0);
MenuPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPage */])({
        segment: 'menu'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"/Users/mhartington/GitHub/StarTrack-Ionic/src/pages/menu/menu.html"*/'<ion-split-pane>\n\n  <ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Favorites</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <a ion-item *ngFor="let favorite of favorites" (click)="goToDetail(favorite)">\n          <ion-label>\n            <h2>{{favorite.name}}</h2>\n            <h3>by {{favorite.artists[0].name}}</h3>\n          </ion-label>\n        </a>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-nav [root]="menuRoot" #content persistent="false" main></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/Users/mhartington/GitHub/StarTrack-Ionic/src/pages/menu/menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* Events */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map
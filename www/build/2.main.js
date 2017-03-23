webpackJsonp([2],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__menu__["a" /* MenuPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_1__menu__["a" /* MenuPage */]
        ]
    })
], MenuPageModule);

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(244);
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
    function MenuPage(nav, storage) {
        this.nav = nav;
        this.storage = storage;
        this.menuRoot = 'SearchPage';
        // let src = Observable.fromPromise(this.storage.keys());
        // src.subscribe(
        //   (res) => {
        //     this.favorites = res;
        //   },
        //   err => console.log(err),
        //   () => console.log('done')
        // );
    }
    MenuPage.prototype.goToDetail = function (favorite) {
        this.content.push('TrackDetailPage', {
            'track': favorite
        });
    };
    MenuPage.prototype.openPage = function (page) {
        this.content.setRoot(page.component);
    };
    return MenuPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* ViewChild */])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* Nav */])
], MenuPage.prototype, "content", void 0);
MenuPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* IonicPage */])({
        segment: 'menu'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"/Users/mhartington/GitHub/StarTrack-Ionic/src/pages/menu/menu.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Favorites</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n    <!--   <a ion&#45;item *ngFor="let favorite of favorites" (click)="goToDetail(favorite)" menuClose> -->\n    <!--     {{favorite}} -->\n    <!--     <!&#45;&#45; <h2>{{favorite.name}}</h2> &#45;&#45;> -->\n    <!--     <!&#45;&#45; <h3>by {{favorite.artists[0].name}}</h3> &#45;&#45;> -->\n    <!--     <!&#45;&#45; <em>{{favorite.album.name}}</em> &#45;&#45;> -->\n    <!--   </a> -->\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="menuRoot" #content persistent="false"></ion-nav>\n'/*ion-inline-end:"/Users/mhartington/GitHub/StarTrack-Ionic/src/pages/menu/menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map
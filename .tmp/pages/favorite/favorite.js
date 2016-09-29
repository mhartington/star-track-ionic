import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
export var FavoritePage = (function () {
    function FavoritePage(nav) {
        this.nav = nav;
    }
    FavoritePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-favorite',
                    templateUrl: 'favorite.html',
                },] },
    ];
    /** @nocollapse */
    FavoritePage.ctorParameters = [
        { type: NavController, },
    ];
    return FavoritePage;
}());

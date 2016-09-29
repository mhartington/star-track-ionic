import { NavController } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { SearchPage } from '../search/search';
import { FavoritePage } from '../favorite/favorite';
export var MenuPage = (function () {
    function MenuPage(nav) {
        this.nav = nav;
        this.pages = [
            { title: 'Search', component: SearchPage },
            { title: 'Favorite', component: FavoritePage }
        ];
        this.menuRoot = SearchPage;
    }
    MenuPage.prototype.openPage = function (page) {
        this.content.setRoot(page.component);
    };
    MenuPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-menu',
                    templateUrl: 'menu.html',
                },] },
    ];
    /** @nocollapse */
    MenuPage.ctorParameters = [
        { type: NavController, },
    ];
    MenuPage.propDecorators = {
        'content': [{ type: ViewChild, args: ['content',] },],
    };
    return MenuPage;
}());

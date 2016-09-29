import { Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { StatusBar, Keyboard } from 'ionic-native';
import { MenuPage } from '../pages/menu/menu';
export var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = MenuPage;
        this.platform.ready().then(function () {
            Keyboard.disableScroll(true);
            if (platform.is('ios')) {
                StatusBar.styleDefault();
            }
            else if (platform.is('android')) {
                StatusBar.backgroundColorByHexString('#1d833c');
            }
        });
    }
    MyApp.decorators = [
        { type: Component, args: [{
                    template: "<ion-nav [root]=\"rootPage\"></ion-nav>"
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
    ];
    return MyApp;
}());

import {Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { StatusBar, Keyboard, Splashscreen } from 'ionic-native';
import { MenuPage } from '../pages/menu/menu';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any = MenuPage;

  constructor(public platform: Platform) {
    this.platform.ready().then(() => {
      Keyboard.disableScroll(true);
      if (platform.is('ios')) {
        StatusBar.styleDefault();
      } else if (platform.is('android')) {
        StatusBar.backgroundColorByHexString('#1d833c');
      }
    });

  }
}
import { ionicBootstrap, Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { StatusBar, Keyboard, Splashscreen } from 'ionic-native';
import { MenuPage } from './pages/menu/menu';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
class MyApp {
  rootPage: any = MenuPage;

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      Keyboard.disableScroll(true);
      if (platform.is('ios')) {
        StatusBar.styleDefault();
      } else if (platform.is('android')) {
        StatusBar.backgroundColorByHexString('#249e48');
      }
    });

  }
}

ionicBootstrap(MyApp);

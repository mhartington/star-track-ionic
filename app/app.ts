import {ionicBootstrap, Platform} from 'ionic-angular';
import {Component} from '@angular/core';
import {StatusBar} from 'ionic-native';
import {MenuPage} from './pages/menu/menu'


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
class MyApp {
  rootPage: any = MenuPage

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });

  }
}

ionicBootstrap(MyApp)

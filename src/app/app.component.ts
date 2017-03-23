import { Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  public rootPage: any = 'MenuPage';
  constructor(
    public platform: Platform,
    public keyboard: Keyboard,
    public splashscreen: SplashScreen,
    public statusbar: StatusBar
  ) {
    this.platform.ready().then(() => {
      this.keyboard.disableScroll(true);
      if (platform.is('ios')) {
        this.statusbar.styleDefault();
      } else if (platform.is('android')) {
        this.statusbar.backgroundColorByHexString('#1d833c');
      }
      this.splashscreen.hide();
    });

  }
}

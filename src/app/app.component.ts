import { Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  template: `<ion-nav root="MenuPage"></ion-nav>`,
  preserveWhitespaces: false
})
export class MyApp {
  constructor(public plt: Platform, public statusbar: StatusBar) {
    this.plt.ready().then(() => {
      this.statusbar.overlaysWebView(true);
      this.plt.is('ios')
        ? this.statusbar.styleDefault()
        : this.statusbar.styleLightContent();
    });
  }
}

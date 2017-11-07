import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';

@NgModule({
  declarations: [MyApp],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__startTrack'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [StatusBar]
})
export class AppModule {}

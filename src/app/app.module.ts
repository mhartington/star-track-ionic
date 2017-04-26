import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { NativeMedia } from '../providers/native-media/native-media';
import { SpotifyService } from '../providers/spotify-service/spotify-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__startTrack'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [SpotifyService, NativeMedia, StatusBar, SplashScreen, Keyboard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

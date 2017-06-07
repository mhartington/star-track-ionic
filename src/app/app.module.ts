import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { NativeMedia } from '../providers/native-media/native-media';
import { ItunesService } from '../providers/itunes-service/itunes-service';

import { StatusBar } from '@ionic-native/status-bar';
import { MusicControls } from '@ionic-native/music-controls';
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
  providers: [ItunesService, NativeMedia, StatusBar, SplashScreen, Keyboard, MusicControls]
})
export class AppModule { }

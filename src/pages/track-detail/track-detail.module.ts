import { NgModule } from '@angular/core';
import { TrackDetailPage } from './track-detail';
import { HttpModule } from '@angular/http';
import { IonicPageModule } from 'ionic-angular';
import { IonMusicCardComponentModule } from '../../components/ion-music-card/ion-music-card.module';
import { ItunesService } from '../../providers/itunes-service/itunes-service';
import { NativeMedia } from '../../providers/native-media/native-media';

@NgModule({
  declarations: [TrackDetailPage],
  imports: [
    HttpModule,
    IonMusicCardComponentModule,
    IonicPageModule.forChild(TrackDetailPage)
  ],
  providers: [ItunesService, NativeMedia]

})
export class TrackDetailPageModule { }

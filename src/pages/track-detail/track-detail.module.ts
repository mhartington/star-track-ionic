import { NgModule } from '@angular/core';
import { TrackDetailPage } from './track-detail';
import { IonicPageModule } from 'ionic-angular';
import { IonMusicCardComponentModule } from '../../components/ion-music-card/ion-music-card.module';
import { ItunesService } from '../../providers/itunes-service/itunes-service';
import { NativeMedia } from '../../providers/native-media/native-media';
import { MusicControls } from '@ionic-native/music-controls';

@NgModule({
  declarations: [TrackDetailPage],
  imports: [
    IonMusicCardComponentModule,
    IonicPageModule.forChild(TrackDetailPage)
  ],
  providers: [ItunesService, NativeMedia, MusicControls]
})
export class TrackDetailPageModule {}

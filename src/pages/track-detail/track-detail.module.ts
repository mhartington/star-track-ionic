import { NgModule } from '@angular/core';
import { TrackDetailPage } from './track-detail';
import { IonicPageModule } from 'ionic-angular';
import { IonMusicCardComponentModule } from '../../components/ion-music-card/ion-music-card.module';

@NgModule({
  declarations: [TrackDetailPage],
  imports: [
    IonMusicCardComponentModule,
    IonicPageModule.forChild(TrackDetailPage)],
  entryComponents: [TrackDetailPage]
})
export class TrackDetailPageModule { }

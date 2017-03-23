import { NgModule } from '@angular/core';
import { TrackDetailPage } from './track-detail';
import { IonicPageModule } from 'ionic-angular';
import { TimePipeModule } from '../../pipes/time-pipes/time-pipes.module';

@NgModule({
  declarations: [TrackDetailPage],
  imports: [
    TimePipeModule,
    IonicPageModule.forChild(TrackDetailPage)
  ],
  entryComponents: [
    TrackDetailPage
  ]
})
export class TrackDetailPageModule { }

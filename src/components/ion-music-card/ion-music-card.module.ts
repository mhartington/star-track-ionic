import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IonMusicCardComponent } from './ion-music-card';
import { TimePipeModule } from '../../pipes/time-pipes/time-pipes.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [IonMusicCardComponent],
  imports: [
    TimePipeModule,
    CommonModule,
    IonicModule
  ],
  exports: [IonMusicCardComponent]
})
export class IonMusicCardComponentModule { }

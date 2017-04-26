import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [IonMusicCardComponent]
})
export class IonMusicCardComponentModule { }

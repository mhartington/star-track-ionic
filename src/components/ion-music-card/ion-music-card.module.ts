import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IonMusicCardComponent } from './ion-music-card';
import { TimePipeModule } from '../../pipes/time-pipes/time-pipes.module';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [IonMusicCardComponent],
  imports: [
    TimePipeModule,
    CommonModule,
    DirectivesModule,
    IonicModule
  ],
  exports: [IonMusicCardComponent]
})
export class IonMusicCardComponentModule { }

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IonMusicCardComponent } from './ion-music-card';
import { TimePipeModule } from '../../pipes/time-pipes/time-pipes.module';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../../directives/directives.module';
import { ColorThiefProvider } from '../../providers/color-thief/color-thief';
@NgModule({
  declarations: [IonMusicCardComponent],
  imports: [
    TimePipeModule,
    CommonModule,
    DirectivesModule,
    IonicModule
  ],
  providers: [ColorThiefProvider],
  exports: [IonMusicCardComponent]
})
export class IonMusicCardComponentModule { }

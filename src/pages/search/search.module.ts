import { NgModule } from '@angular/core';
import { SearchPage } from './search';
import { IonicPageModule } from 'ionic-angular';
import { TimePipeModule } from '../../pipes/time-pipes/time-pipes.module';
import { ItunesService } from '../../providers/itunes-service/itunes-service';
import { SplashScreen } from '@ionic-native/splash-screen';
@NgModule({
  declarations: [SearchPage],
  imports: [
    TimePipeModule,
    IonicPageModule.forChild(SearchPage)
  ],
  providers: [ItunesService, SplashScreen]
})
export class SearchPageModule { }

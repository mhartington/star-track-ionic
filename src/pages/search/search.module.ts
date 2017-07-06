import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SearchPage } from './search';
import { IonicPageModule } from 'ionic-angular';
import { TimePipeModule } from '../../pipes/time-pipes/time-pipes.module';
import { ItunesService } from '../../providers/itunes-service/itunes-service';

@NgModule({
  declarations: [SearchPage],
  imports: [
    HttpModule,
    TimePipeModule,
    IonicPageModule.forChild(SearchPage)
  ],
  providers: [ItunesService]
})
export class SearchPageModule { }

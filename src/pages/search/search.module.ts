import { NgModule } from '@angular/core';
import { SearchPage } from './search';
import { IonicPageModule } from 'ionic-angular';
import { TimePipeModule } from '../../pipes/time-pipes/time-pipes.module';

@NgModule({
  declarations: [SearchPage],
  imports: [
    TimePipeModule,
    IonicPageModule.forChild(SearchPage)
  ]
})
export class SearchPageModule { }

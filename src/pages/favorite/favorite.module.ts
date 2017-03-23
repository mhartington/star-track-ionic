import { NgModule } from '@angular/core';
import { FavoritePage} from './favorite';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [FavoritePage],
  imports: [IonicPageModule.forChild(FavoritePage)],
  entryComponents: [ FavoritePage]
})
export class FavoritePageModule { }

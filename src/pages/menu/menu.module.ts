import { NgModule } from '@angular/core';
import { MenuPage } from './menu';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [MenuPage],
  imports: [
    IonicPageModule.forChild(MenuPage)
  ],
  entryComponents: [
    MenuPage
  ]
})
export class MenuPageModule { }

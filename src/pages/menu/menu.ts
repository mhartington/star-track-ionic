import {NavController, Nav} from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';
import {SearchPage} from '../search/search';
import {FavoritePage} from '../favorite/favorite';
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild('content') content;

  pages = [
    { title: 'Search', component: SearchPage },
    { title: 'Favorite', component: FavoritePage }
  ];
  menuRoot = SearchPage;
  constructor(
    public nav: NavController
  ) { }

  openPage(page) {
    this.content.setRoot(page.component)
  }
}

import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { FavoritePage } from '../favorite/favorite';
export declare class MenuPage {
    nav: NavController;
    content: any;
    pages: ({
        title: string;
        component: typeof SearchPage;
    } | {
        title: string;
        component: typeof FavoritePage;
    })[];
    menuRoot: typeof SearchPage;
    constructor(nav: NavController);
    openPage(page: any): void;
}

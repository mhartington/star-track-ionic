import { NavParams, NavController } from 'ionic-angular';
import { SpotifyService } from '../../providers/spotify-service/spotify-service';
export declare class ResultsPage {
    params: NavParams;
    spotify: SpotifyService;
    nav: NavController;
    query: any;
    listing: any[];
    constructor(params: NavParams, spotify: SpotifyService, nav: NavController);
    detail(track: any): void;
}

import { NavController, NavParams, Events } from 'ionic-angular';
import { NativeMedia } from '../../providers/native-media/native-media';
export declare class TrackDetailPage {
    nav: NavController;
    params: NavParams;
    events: Events;
    nativeMedia: NativeMedia;
    track: any;
    progress: number;
    audio: any;
    ifPlaying: boolean;
    constructor(nav: NavController, params: NavParams, events: Events, nativeMedia: NativeMedia);
    ionViewWillLeave(): void;
    toggleSong(): void;
    playSong(): void;
    stopSong(): void;
    setProgress(): void;
    playerEnded(): void;
}

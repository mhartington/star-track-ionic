import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
export declare class NativeMedia {
    platform: Platform;
    constructor(platform: Platform);
    createMediaControls(track: any): void;
    onError(e: any): void;
    onSuccess(e: any): void;
    destroy(): void;
}

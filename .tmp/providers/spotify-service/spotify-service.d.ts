import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
export declare class SpotifyService {
    http: Http;
    favorites: any[];
    constructor(http: Http);
    load(query: any): Observable<any>;
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SpotifyService {
  constructor(public http: Http) { }
  load(query): Observable<any> {
    return this.http.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&limit=50&type=track`)
      .map((res: Response) => res.json());
  }
}

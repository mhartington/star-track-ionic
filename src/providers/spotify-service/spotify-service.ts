import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';

import { Observable } from 'rxjs/Observable';
@Injectable()
export class SpotifyService {
  constructor(public http: Http) { }
  load(query): Observable<any> {
    return this.http.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&limit=50&type=track`)
      .retryWhen(error => error.delay(500))
      .timeout(5000)
      .map((res: Response) => res.json());
  }

  loadSong(songId){
    return this.http.get(`https://api.spotify.com/v1/tracks/${songId}`)
      .retryWhen(error => error.delay(500))
      .timeout(5000)
      .map((res: Response) => res.json());
  }
}

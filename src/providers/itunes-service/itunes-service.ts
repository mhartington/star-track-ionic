import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';

import { Observable } from 'rxjs/Observable';
@Injectable()
export class ItunesService {
  constructor(public http: HttpClient) {}
  load(query): Observable<any> {
    return this.http
      .get(
        `https://itunes.apple.com/search?term=${encodeURIComponent(
          query
        )}&media=music`
      )
      .retryWhen(error => error.delay(500))
      .timeout(5000)
  }

  loadSong(songId): Observable<any> {
    return this.http
      .get(`https://itunes.apple.com/lookup?id=${songId}`)
      .retryWhen(error => error.delay(500))
      .timeout(5000)
  }
}

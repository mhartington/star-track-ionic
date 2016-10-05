import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SpotifyService {
  favorites = [];
  constructor(public http: Http) { }

  load(query) {
    console.log(query)
    if (query.filter === 'everything') {
      return this.http.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query.term)}&limit=50&type=track`)
        .map((res: Response) => res.json());
    } else {
      return this.http.get(`https://api.spotify.com/v1/search?q=${query.filter}%3A${encodeURIComponent(query.term)}&limit=50&type=track`)
        .map((res: Response) => res.json());

    }
  }
}

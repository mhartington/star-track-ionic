import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  favorites = [];
  constructor(private http: Http) { }

  load(query) {
    if (query.filter === 'everything') {
      return this.http.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query.term)}&limit=25&type=track`)
        .map((res: Response) => res.json());
    } else {
      return this.http.get(`https://api.spotify.com/v1/search?q=${query.filter}%3A${encodeURIComponent(query.term)}&limit=25&type=track`)
        .map((res: Response) => res.json());

    }
  }
}

import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { SpotifyService } from '../../providers/spotify-service/spotify-service';
import { TrackDetailPage } from '../track-detail/track-detail';
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  public listing = [];
  public isError: boolean = false;
  constructor(
    public nav: NavController,
    public spotify: SpotifyService,
  ) {
  }
  detail(track) {
    this.nav.push(TrackDetailPage, {
      'track': track
    });
  }

  doSearch(term) {
    if (term) {
      this.spotify.load(term)
        .subscribe(
        (results) => {
          this.listing = results.tracks.items;
          console.log(results);
        },
        error => this.isError = true
        );
    } else {
      this.listing = [];
    }
  }
}

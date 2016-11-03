import { NavController } from 'ionic-angular';
import { Component, trigger, state, style, animate, transition } from '@angular/core';
import { SpotifyService } from '../../providers/spotify-service/spotify-service';
import { TrackDetailPage } from '../track-detail/track-detail';
declare var google: any;
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: '0' })),
      state('*', style({ opacity: '1' })),
      transition('void <=> *', animate('150ms ease-in'))
    ])
  ]
})
export class SearchPage {
  public listing = [];
  public isError: boolean = false;
  constructor(
    public nav: NavController,
    public spotify: SpotifyService,
  ) { }
  detail(track) {
    this.nav.push(TrackDetailPage, {
      'track': track
    });
  }

  doSearch(term) {
    if (term) {
      this.spotify.load(term)
        .subscribe(
        results => this.listing = results.tracks.items,
        error => this.isError = true
        );
    } else {
      this.listing = [];
    }
  }
}

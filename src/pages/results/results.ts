import { NavParams, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { SpotifyService } from '../../providers/spotify-service/spotify-service';
import { TrackDetailPage } from '../track-detail/track-detail';
import { Moment } from '../../pipes/moment';
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  query = this.params.get('search');
  listing = [];
  constructor(
    public params: NavParams,
    public spotify: SpotifyService,
    public nav: NavController
  ) {
    this.spotify.load(this.query).subscribe(
      res => this.listing = res.tracks.items,
      err => console.log(err)
    );
  }

  detail(track) {
    this.nav.push(TrackDetailPage, {
      'track': track
    });
  }
}

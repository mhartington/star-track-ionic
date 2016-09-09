import { NavParams, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { SpotifyService } from '../../providers/spotify-service/spotify-service';
import { TrackDetailPage } from '../track-detail/track-detail';
import { Moment } from '../../pipes/moment';
@Component({
  templateUrl: 'build/pages/results/results.html',
  providers: [SpotifyService],
  pipes: [Moment],
})
export class ResultsPage {
  query = this.params.get('search');
  listing = [];
  constructor(
    private params: NavParams,
    private spotify: SpotifyService,
    private nav: NavController
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

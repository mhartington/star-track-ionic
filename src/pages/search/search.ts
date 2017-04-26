import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { SpotifyService } from '../../providers/spotify-service/spotify-service';
import { Storage } from '@ionic/storage';

import { FormControl } from '@angular/forms'

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

@IonicPage({
  segment: 'search'
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  public listing = [];
  public isError: boolean = false;
  public showSpinner: boolean = false;
  public searchInput = new FormControl('')
  constructor(
    public nav: NavController,
    public spotify: SpotifyService,
    public loadingCtrl: LoadingController,
    public storage: Storage
  ) { }
  ionViewDidLoad() {
    this.searchInput.valueChanges
      .filter((term) => {
        if (term) {
          this.showSpinner = true
          this.isError = false;
          return term
        } else {
          this.listing = [];
          this.showSpinner = false;
        }
      })
      .debounceTime(500)
      .switchMap(term => this.spotify.load(term))
      .do(() => this.showSpinner = false)
      .subscribe(
      results => this.listing = results.tracks.items,
      err => console.log(err)
      )
  }
  detail(track) {
    this.nav.push('TrackDetailPage', {
      'id': track.id,
      'track': track
    });
  }
}

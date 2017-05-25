import { IonicPage, NavController, Platform } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { SpotifyService } from '../../providers/spotify-service/spotify-service';
import { Storage } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
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

  @ViewChild('header') header: ElementRef;
  hasSearch: boolean = false;
  public listing = [];
  public isError: boolean = false;
  public showSpinner: boolean = false;
  public searchInput = new FormControl('')
  public showOverlay: boolean = false;
  constructor(
    public nav: NavController,
    public spotify: SpotifyService,
    public storage: Storage,
    public platform: Platform,
    public splashscreen: SplashScreen,
  ) { }
  searchFocused(e) {
    this.hasSearch = true
    if (!this.searchInput.value) {
      this.showOverlay = true
      this.isError = false
    }
  }
  searchCleared(e) {
    this.hasSearch = false
    this.isError = false
  }
  searchBlured(e) {
    this.showOverlay = false
    this.isError = false
    if (!this.searchInput.value) {
      this.hasSearch = false
    }
  }
  setSearch(val) {
    this.isError = false
    this.hasSearch = true
    this.searchInput.setValue(val)
  }
  ionViewDidLoad() {
    this.platform.ready()
      .then(() => {
        this.splashscreen.hide()
      })
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
      .do(() => {
        this.showOverlay = false
        this.showSpinner = false
      })
      .subscribe(
      results => this.listing = results.tracks.items,
      err => {
        this.showOverlay = false
        this.showSpinner = false
        this.isError = true
        console.log(err)
      }
      )
  }
  detail(track) {
    this.nav.push('TrackDetailPage', {
      'id': track.id
    });
  }
}

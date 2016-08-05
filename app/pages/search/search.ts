import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import {ResultsPage} from '../results/results';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  templateUrl: 'build/pages/search/search.html'
})

export class SearchPage {
  private form = new FormGroup({
    'term': new FormControl('', Validators.required),
    'filter': new FormControl('everything')
  });
  constructor(
    private nav: NavController
  ) {
  }
  search() {
    this.nav.push(ResultsPage, {
      'search': this.form.value
    });
  }
}

import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import {ResultsPage} from '../results/results';

import {
  FORM_DIRECTIVES,
  FormBuilder,
  Validators
} from '@angular/common';

@Component({
  templateUrl: 'build/pages/search/search.html'
})

export class SearchPage {
  private form = this.fb.group({
    'term': ['', Validators.required],
    'filter': ['everything', Validators.required]
  })
  constructor(
    private nav: NavController,
    private fb: FormBuilder) {
  }
  search() {
    this.nav.push(ResultsPage, {
      'search': this.form.value
    })
  }
}

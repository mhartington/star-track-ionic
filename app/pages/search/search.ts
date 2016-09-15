import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ResultsPage } from '../results/results';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: 'build/pages/search/search.html'
})

export class SearchPage {
  private form = this.formBuilder.group({
    'term': ['', Validators.required],
    'filter': ['everything']
  });
  constructor(
    private nav: NavController,
    public formBuilder: FormBuilder
  ) {}
  search() {
    this.nav.push(ResultsPage, {
      'search': this.form.value
    });
  }
}

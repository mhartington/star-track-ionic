import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ResultsPage } from '../results/results';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {
  public form = this.formBuilder.group({
    'term': ['', Validators.required],
    'filter': ['everything']
  });
  constructor(
    public nav: NavController,
    public formBuilder: FormBuilder
  ) {}
  search() {
    this.nav.push(ResultsPage, {
      'search': this.form.value
    });
  }
}

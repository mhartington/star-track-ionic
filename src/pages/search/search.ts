import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ResultsPage } from '../results/results';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {
  public term: FormControl = this.formBuilder.control('', Validators.required);
  public form: FormGroup = this.formBuilder.group({
    'term': this.term,
    'filter': ['everything']
  });
  constructor(
    public nav: NavController,
    public formBuilder: FormBuilder
  ) { }
  search() {
    this.nav.push(ResultsPage, {
      'search': this.form.value
    });
  }
  reset() {
    this.term.reset();
  }
}

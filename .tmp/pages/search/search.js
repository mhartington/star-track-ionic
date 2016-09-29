import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ResultsPage } from '../results/results';
import { Validators, FormBuilder } from '@angular/forms';
export var SearchPage = (function () {
    function SearchPage(nav, formBuilder) {
        this.nav = nav;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            'term': ['', Validators.required],
            'filter': ['everything']
        });
    }
    SearchPage.prototype.search = function () {
        this.nav.push(ResultsPage, {
            'search': this.form.value
        });
    };
    SearchPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-search',
                    templateUrl: 'search.html'
                },] },
    ];
    /** @nocollapse */
    SearchPage.ctorParameters = [
        { type: NavController, },
        { type: FormBuilder, },
    ];
    return SearchPage;
}());

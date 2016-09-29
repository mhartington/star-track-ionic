import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class SearchPage {
    nav: NavController;
    formBuilder: FormBuilder;
    form: FormGroup;
    constructor(nav: NavController, formBuilder: FormBuilder);
    search(): void;
}

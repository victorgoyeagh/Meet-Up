import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from './../testpage/testpage';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {
    }

    NavigateToTestPage() {
        this.navCtrl.push(TestPage);
    }
}

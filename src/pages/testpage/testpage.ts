import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-testpage',
    templateUrl: 'testpage.html',
})
export class TestPage {

    constructor(public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad test page');
    }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../../../../pages/testpage/testpage';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.html'
})
export class MenuComponent {

    text: string;

    constructor(public navCtrl: NavController) {
        console.log('Hello MenuComponent Component');
        this.text = 'Hello World';
    }

    NavigateToTestPage() {
        this.navCtrl.push(TestPage);
    }

}

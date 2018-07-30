import { Component, OnInit } from '@angular/core';
import { SwapClassDirective } from '../../directive/swap-class.directive';
import { MyApp } from '../../../../app.component';



@Component({
    selector: 'app-header',
    templateUrl: 'header.html'
})
export class HeaderComponent implements OnInit {
    private app = MyApp;

    text: string;

    constructor() {
    }

    ngOnInit() {
    }
}

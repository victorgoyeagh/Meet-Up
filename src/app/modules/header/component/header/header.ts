import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-header',
    templateUrl: 'header.html'
})
export class HeaderComponent implements OnInit {

    text: string;

    constructor() {
    }

    ngOnInit() {
    }
}

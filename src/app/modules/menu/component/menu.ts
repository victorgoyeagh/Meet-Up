import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as Rx from 'rxjs';
import { LoginPage } from '../../../../pages/login/login';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.html'
})
export class MenuComponent {
    private items:Rx.Observable<any[]>= new Rx.Observable<any[]>();

    constructor( private db: AngularFireDatabase) {
        this.items =  this.db.list<any>('/courses').valueChanges();
       /* let data = db.list('/courses').valueChanges().subscribe((value) => {
            this.items = value;
            console.log(value);
        })*/
    }

    NavigateToTestPage() {
    }

}

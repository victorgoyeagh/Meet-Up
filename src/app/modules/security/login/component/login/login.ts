import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as Rx from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: 'login.html'
})
export class LoginComponent {
    public courses: Rx.Observable<any[]>;
    public text: string;

    constructor(
        private db: AngularFirestore
    ) {
        //this.courses = db.collection('/courses').valueChanges();
        db.collection('/courses').valueChanges().subscribe((response: any) => {
            this.courses = response[0].courses;
            console.log(response[0].courses);
        })

        this.text = 'Hello World';
    }

}

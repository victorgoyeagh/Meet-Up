import { Component, OnDestroy } from '@angular/core';
import * as Rx from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
    selector: 'app-login',
    templateUrl: 'login.html'
})
export class LoginComponent implements OnDestroy {
    private subs: Array<Rx.Subscription>;
    public courses: Rx.Observable<any[]>;
    public text: string;

    constructor(
        private db: AngularFirestore
    ) {
        //this.courses = db.collection('/courses').valueChanges();
        let sub = db.collection('/courses').valueChanges().subscribe((response: any) => {
            this.courses = response[0].courses;
            console.log(response[0].courses);
        })

        this.text = 'Hello World';
    }

    ngOnDestroy(){
        if (this.subs){
            this.subs.forEach(sub => {
               sub.unsubscribe(); 
            });
        }
    }

}

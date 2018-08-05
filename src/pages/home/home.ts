import { Component } from '@angular/core';
import { TestPage } from './../testpage/testpage';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    
    public loginForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl() 
    })

    constructor() {
    }


  ionViewDidLoad() {
       // this.loginForm.controls.username

  }

}

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TestPage } from './../testpage/testpage';
import { FormGroup, FormControl } from '@angular/forms';
import { Slides } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild(Slides) slides: Slides
    
    public loginForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl() 
    })

    constructor() {
    }
    ngAfterViewInit(){
        this.slides.fade = {
          crossFade: true
        }
      }

  ionViewDidLoad() {
       // this.loginForm.controls.username

  }

}

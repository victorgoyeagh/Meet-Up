import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, MenuController, IonicModule, Menu } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as Rx from 'rxjs';
import { map } from 'rxjs/operators';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CommunicationService } from './providers/communication.service';


@Component({
	templateUrl: 'app.html'
})
export class MyApp implements OnInit {
	public rootPage: any;
	public homePage: any;
	public loginPage: any;
    public displayYear: number;
    @ViewChild('ionMenu') ionMenu: Menu;

    constructor(
        platform: Platform, 
        statusBar: StatusBar, 
        splashScreen: SplashScreen, 
        private communicationService: CommunicationService
    ) {
        this.homePage = HomePage;
        this.loginPage = LoginPage;
        this.rootPage = this.homePage;

		platform.ready().then(() => {
			statusBar.styleDefault();
			splashScreen.hide();
        });

        let date = new Date();
        this.displayYear = date.getFullYear();
    }

    ngOnInit(){
        this.ionMenu.enable(true);
        this.ionMenu.swipeEnable(false);

        this.ionMenu.ionClose.subscribe((value) => {
            this.communicationService.updateMenuIsClosed(value);
        })
    }

    openPage(e){
        this.rootPage = e;
    }

    closeMenu(){
        this.ionMenu.close();
    }
}


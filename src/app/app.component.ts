import { Component } from '@angular/core';
import { Platform, MenuController, IonicPage } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
    public displayYear: number;
	rootPage: any = HomePage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menu: MenuController) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
        });
        this.menu.enable(true);

        let date = new Date();
        this.displayYear = date.getFullYear();
    }
    
    openPage(pageToOpen){
        this.rootPage = LoginPage;
        this.closeMenu();
    }

    closeMenu(){
        this.menu.close();
    }
}


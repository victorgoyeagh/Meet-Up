import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TestpagePageModule } from '../pages/testpage/testpage.module';
import { RootReducer, appInitialState } from './store/global.store';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { SecurityModule } from './modules/security/security.module';
import { LoginPageModule } from '../pages/login/login.module';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';


@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    imports: [
        AngularFireModule.initializeApp({
            apiKey: "AIzaSyBo11n2-ZiRtNvYoxqhJ6d3EotvlSK5VEM",
            authDomain: "fir-app-d932a.firebaseapp.com",
            databaseURL: "https://fir-app-d932a.firebaseio.com",
            projectId: "fir-app-d932a",
            storageBucket: "fir-app-d932a.appspot.com",
            messagingSenderId: "176747700729"
        }),
        AngularFirestoreModule,
        AngularFireDatabaseModule,
        NgReduxModule,
        HeaderModule,
        FooterModule,
        SecurityModule,
        LoginPageModule,
        TestpagePageModule,
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {

    constructor(private _store: NgRedux<any>) {
        this._store.configureStore(RootReducer, {});
    }
}

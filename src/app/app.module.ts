import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuModule } from './components/components.module';
import { TestpagePageModule } from '../pages/testpage/testpage.module';
import { RootReducer, appInitialState } from './store/global.store';
import { NgRedux } from 'ng2-redux';

@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    imports: [
        MenuModule,
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
        this._store.configureStore(RootReducer, appInitialState);
    }
}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './testpage';
import { MenuModule } from '../../app/components/components.module';


@NgModule({
    declarations: [
        TestPage,
    ],
    imports: [
        MenuModule,
        IonicPageModule.forChild(TestPage),
    ],
})
export class TestpagePageModule { }

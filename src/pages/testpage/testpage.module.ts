import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './testpage';

@NgModule({
    declarations: [
        TestPage,
    ],
    imports: [
        IonicPageModule.forChild(TestPage),
    ],
})
export class TestpagePageModule { }

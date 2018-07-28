import { NgModule } from '@angular/core';
import { LoginComponent } from './login/component/login/login';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, AngularFirestoreModule],
    exports: [LoginComponent]
})
export class SecurityModule { }

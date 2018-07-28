import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { SecurityModule } from '../../app/modules/security/security.module';
import { HeaderModule } from '../../app/modules/header/header.module';



@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    HeaderModule,
    SecurityModule,
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    SecurityModule
  ]
})
export class LoginPageModule {}

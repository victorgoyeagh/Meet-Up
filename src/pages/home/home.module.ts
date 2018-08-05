import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecurityModule } from '../../app/modules/security/security.module';
import { HeaderModule } from '../../app/modules/header/header.module';
import { FooterModule } from '../../app/modules/footer/footer.module';
import { HomePage } from './home';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    FooterModule,
    HeaderModule,
    SecurityModule,
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    SecurityModule
  ]
})
export class HomePageModule {}

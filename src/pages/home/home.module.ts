import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecurityModule } from '../../app/modules/security/security.module';
import { HeaderModule } from '../../app/modules/header/header.module';
import { FooterModule } from '../../app/modules/footer/footer.module';
import { HomePage } from './home';



@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
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

import { NgModule } from '@angular/core';
import { HeaderComponent } from './component/header/header';
import { MenuModule } from '../menu/menu.module';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [HeaderComponent],
	imports: [IonicPageModule, MenuModule],
	exports: [HeaderComponent]
})
export class HeaderModule {}

import { NgModule } from '@angular/core';
import { HeaderComponent } from './component/header/header';
import { MenuModule } from '../menu/menu.module';
import { IonicPageModule } from 'ionic-angular';
import { SwapClassDirective } from './directive/swap-class.directive';


@NgModule({
	declarations: [HeaderComponent,SwapClassDirective],
	imports: [IonicPageModule, MenuModule],
	exports: [HeaderComponent]
})
export class HeaderModule {}

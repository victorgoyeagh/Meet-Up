import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/component/menu';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [MenuComponent],
	imports: [IonicModule],
	exports: [MenuComponent]
})
export class MenuModule {}

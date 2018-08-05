import {  ElementRef, AfterViewChecked, Directive } from '@angular/core';
import { Keyboard } from 'ionic-angular';



@Directive({
    selector: '[autofocus]'
})
export class FocusInput implements AfterViewChecked {
    private firstTime: boolean = true;
    constructor(public elem: ElementRef) {
}

ngAfterViewChecked() {
  if (this.firstTime) {
    let vm = this;
    setTimeout(function(){

    vm.elem.nativeElement.firstChild.focus();
    vm.firstTime = false;

    }, 300)
  }
 }
}
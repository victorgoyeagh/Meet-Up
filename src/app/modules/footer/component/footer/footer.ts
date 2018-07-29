import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.html'
})
export class FooterComponent {

  text: string;

  constructor() {
    console.log('Hello FooterComponent Component');
    this.text = 'FooterComponent';
  }

}
 
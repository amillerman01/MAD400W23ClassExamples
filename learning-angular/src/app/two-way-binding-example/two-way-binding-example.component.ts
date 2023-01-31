import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-example',
  templateUrl: './two-way-binding-example.component.html',
  styleUrls: ['./two-way-binding-example.component.scss']
})
export class TwoWayBindingExampleComponent {
  title?: string;
  testPassword?: string;
  // inputElement?: any;

  constructor() {
    this.title = "Two Way Binding Example Title";
    // this.inputElement = document.querySelector("input");

  }

  onClick(inputTagValue: string): void{
    console.log("The value of the input is: ", inputTagValue);
  }

}

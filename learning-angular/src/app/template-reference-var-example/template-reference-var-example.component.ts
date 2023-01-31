import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-var-example',
  templateUrl: './template-reference-var-example.component.html',
  styleUrls: ['./template-reference-var-example.component.scss']
})
export class TemplateReferenceVarExampleComponent {
  title?: string;
  // inputElement?: any;

  constructor() {
    this.title = "Template Reference Var Title";
    // this.inputElement = document.querySelector("input");

  }

  onClick(inputTagValue: string): void{
    console.log("The value of the input is: ", inputTagValue);
  }
}

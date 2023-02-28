import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-example',
  templateUrl: './reactive-forms-example.component.html',
  styleUrls: ['./reactive-forms-example.component.scss']
})
export class ReactiveFormsExampleComponent {
  name = new FormControl<string>("Chris");

  constructor() {
    this.name.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  changeFromTypescript = () => {
    this.name.setValue("Ben");
  }
}

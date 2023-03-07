import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-example',
  templateUrl: './reactive-forms-example.component.html',
  styleUrls: ['./reactive-forms-example.component.scss']
})
export class ReactiveFormsExampleComponent {
  studentForm = new FormGroup({
    fname: new FormControl<string>("Chris", [Validators.required, Validators.minLength(5)]),
    lname: new FormControl<string>("sirhc")
  });

  constructor() {
    this.studentForm.controls["fname"].valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  changeFromTypescript = () => {
    this.studentForm.controls["fname"].setValue("Ben");
  }

  onSubmit() {
    console.log(this.studentForm);
  }
}

import { Component, Input } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-list-item',
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.scss']
})
export class ContentListItemComponent {
  // I can choose to set this as an optional variable with the question mark
  @Input() contentItemInputValue?: IContent;

  // OR I could use a constructor to give it a default value that will be replaced later
    /*
     notice I only set the values of some of the IContent properties, specifically the ones that were not optional.
     This solution is a little clunky though, as now there will be false data there before the input value is passed in.
     This can cause unexpected visual problems on the HTML side of things, so we will just set our contentItemInputValue to be optional instead of using this.
     */
  // constructor() {
  //   this.contentItemInputValue = {
  //     id: -1,
  //     title: "",
  //     author: "",
  //     type: ""
  //   };
  // }
}

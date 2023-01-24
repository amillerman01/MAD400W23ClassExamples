import { Component } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  singleCakeItem: IContent;

  constructor() {
    this.singleCakeItem = {
      id: 1025,
      imageUrl:
        'https://angular.io/assets/images/logos/angular/angular.png',
      type: "news",
      body: '<p>This is the body of the content</p>'
    };
  }
}

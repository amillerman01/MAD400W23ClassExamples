import { Component } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  listOfCakes: IContent[];

  constructor() {
    this.listOfCakes = [];
    this.listOfCakes.push({
      id: 1025,
      imageUrl:
        'https://angular.io/assets/images/logos/angular/angular.png',
      // type: "news",
      body: '<p>This is the body of the content</p>'
    });
  }

  processContent(content: IContent):string {
    // console.log(content.body);
    return content.type ?? "EMPTY";
  }

}

import { Component } from '@angular/core';
import { IContent } from '../models/icontent';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  listOfCakes: IContent[];
  // private contentService: ContentService;

  constructor(private contentService: ContentService) {
    // this.contentService = contentService;
    this.listOfCakes = [];
    this.listOfCakes.push({
      id: 1024,
      imageUrl:
        'https://angular.io/assets/images/logos/angular/angular.png',
      // type: "news",
      body: '<p>This is the body of the content</p>'
    },{
      id: 1025,
      imageUrl:
        'https://angular.io/assets/images/logos/angular/angular.png',
      // type: "news",
      body: '<p>This is the body of the content</p>'
    },{
      id: 1026,
      imageUrl:
        'https://angular.io/assets/images/logos/angular/angular.png',
      type: "Semi Sweet",
      body: '<p>This is the body of the content</p>'
    },{
      id: 1027,
      imageUrl:
        'https://angular.io/assets/images/logos/angular/angular.png',
      // type: "news",
      body: '<p>This is the body of the content</p>'
    },{
      id: 1028,
      imageUrl:
        'https://angular.io/assets/images/logos/angular/angular.png',
      type: "Super sweet",
      body: '<p>This is the body of the content</p>'
    });
  }

  processContent(content: IContent):string {
    // console.log(content.body);
    return content.type ?? "EMPTY";
  }

}

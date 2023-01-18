import { Component } from '@angular/core';
import { IContent } from './models/icontent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title?: string; // optional variable, default value is undefined
  contentItem: IContent;

  constructor() {
    this.contentItem = {
      id: 1025,
      imageUrl:
        'https://angular.io/assets/images/logos/angular/angular.png',
      // type: "news",
      body: '<p>This is the body of the content</p>'
    };
    this.title = 'We are learning javascript right meow and then and then and then and then and then and then and then and then and then and then and then and then and then and then and then and then and then and then';

    var name = "Peter";
    let changingName = "Peter";
    changingName = "Darren";

    const programChair = "Ruth";
    // programChair = "Not Ruth";

    // can't do this cause it's a string
    // changingName = 10;

    let programName: string;
    // let programName: any;

    programName = "MAD400";

    // programName = 10;

    this.processContent(this.contentItem);

  }

  processContent(content: IContent):string {
    console.log(content.body);
    return content.type ?? "EMPTY";
  }
}

import { Component } from '@angular/core';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title?: string; // optional variable, default value is undefined

  constructor(private contentService: ContentService) {
    this.title = 'Cake website, that isn\'t a lie';

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
  }

}

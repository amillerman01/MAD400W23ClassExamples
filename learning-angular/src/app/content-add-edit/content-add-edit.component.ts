import { Component } from '@angular/core';
import { IContent } from '../models/icontent';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-add-edit',
  templateUrl: './content-add-edit.component.html',
  styleUrls: ['./content-add-edit.component.scss']
})
export class ContentAddEditComponent {
  cakeToAdd: IContent = {
    type: "",
    imageUrl: "",
    body: ""
  }
  constructor(private content: ContentService) {
  }

  addContentToServer(): void {
    console.log(this.cakeToAdd);
    this.content.addContent(this.cakeToAdd).subscribe(cakeFromServer => {
      this.cakeToAdd = cakeFromServer;
    })
  }

}

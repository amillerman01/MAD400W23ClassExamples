import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit{
  listOfCakes: IContent[];
  // private contentService: ContentService;

  constructor(private contentService: ContentService) {
    // this.contentService = contentService;
    this.listOfCakes = [];
  }

  ngOnInit(): void {
    this.contentService.getContent().subscribe((IContentArrayOfData: IContent[]) => {
      this.listOfCakes = IContentArrayOfData;
    });
  }

  processContent(content: IContent): string {
    // console.log(content.body);
    return content.type ?? "EMPTY";
  }


}

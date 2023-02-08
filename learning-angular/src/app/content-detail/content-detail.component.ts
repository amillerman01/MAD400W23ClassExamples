import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContent } from '../models/icontent';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  detailCakeItem?: IContent;

  constructor(
    private router: Router,
    private contentService: ContentService,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    // we can't use the snapshot version if we want our detail to link to other detail pages
    // let id = Number(this.route.snapshot.paramMap.get('id'));

    // this lets us watch for any changes to the paramMap while we're still on the detail page.
    // The subscription working once doesn't mean it stop watching for changes. Each time a change happens, the subscription will fire and we will get the new paramMap's id value anew
    this.route.paramMap.subscribe(params => {
      let id: number = 0;
      console.log("TESTING PARAMS", params);
      // uses the + unary operator
      id = +(params.get('id') ?? 1024);

      // we need to do this inside the paramMap subscription, because we don't have an id number to use UNTIL this paramMap subscription fires
      this.contentService.getContentItem(id).subscribe((singleDetailItem: IContent) => {
        console.log("TESTING ", singleDetailItem);

        // if singleDetailItem is is a truthy value (i.e. not undefined in this case), we want to use it
        if (singleDetailItem) {
          this.detailCakeItem = singleDetailItem;
          console.log("TESTING ", this.detailCakeItem);
        }
        else { // otherwise, we got undefined or null from our service, which means the content doesn't exist.
          console.log("Item not found :(");
          // we use the built in location routing of angular to send them to a url that is caught by our PageNotFound routing rule
          this.router.navigate(["/contentNotFoundHere"]);
        }
      });

    });
  }

}

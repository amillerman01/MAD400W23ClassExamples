import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContent } from '../models/icontent';
import { VideoGameService } from '../service/video-game.service';

@Component({
  selector: 'app-content-list-item-detail',
  templateUrl: './content-list-item-detail.component.html',
  styleUrls: ['./content-list-item-detail.component.scss']
})
export class ContentListItemDetailComponent implements OnInit {
  id?: number;
  videoGameDetailItem?: IContent;

  constructor(private route: ActivatedRoute,
    private videoGameService: VideoGameService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('idNumberValue'));


      this.videoGameService.getContentItem(this.id).subscribe((videoGame: IContent) => {
        console.warn("Got the item in the detail: ", videoGame);
         this.videoGameDetailItem = videoGame;
      });

    });
  }
}

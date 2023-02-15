import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { VideoGameService } from '../service/video-game.service';

@Component({
  selector: 'app-content-list-item-search',
  templateUrl: './content-list-item-search.component.html',
  styleUrls: ['./content-list-item-search.component.scss']
})
export class ContentListItemSearchComponent implements OnInit {
  // singleGame: IContent | undefined;
  singleGame?: IContent;

  constructor(private videoGameService: VideoGameService) {
  }

  ngOnInit(): void{
    this.getTheNewItem("3");
  }

  getTheNewItem(newIdNumber: string): void {

    console.warn("Getting an item: ", newIdNumber);

    this.videoGameService.getContentItem(Number(newIdNumber)).subscribe((videoGame: IContent) => {
      console.warn("Got the item: ", videoGame);
       this.singleGame = videoGame;
    });

  }

}

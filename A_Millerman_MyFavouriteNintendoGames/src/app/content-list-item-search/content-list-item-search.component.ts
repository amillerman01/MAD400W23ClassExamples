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
  searchDidNotWork: boolean;

  constructor(private videoGameService: VideoGameService) {
    this.searchDidNotWork = false;
  }

  ngOnInit(): void{
    this.getTheNewItem("3");
  }

  getTheNewItem(newIdNumber: string): void {

    console.warn("Getting an item: ", newIdNumber);

    this.videoGameService.getContentItem(Number(newIdNumber)).subscribe((videoGame: IContent) => {

      if (videoGame == undefined || videoGame.id === -1) {
        // an id of -1 is what my INVALIDGAME uses as its id in the mock-content
        this.searchDidNotWork = true;
        return;
      }
      this.searchDidNotWork = false;
      console.warn("Got the item: ", videoGame);
       this.singleGame = videoGame;
    });

  }

}

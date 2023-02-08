import { Component, OnInit } from '@angular/core';
import { IContent } from './models/icontent';
import { VideoGameService } from './service/video-game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // singleGame: IContent | undefined;
  singleGame?: IContent;
  title = 'A_Millerman_MyFavouriteNintendoGames';

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

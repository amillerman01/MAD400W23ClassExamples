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
    this.videoGameService.getContentItem(3).subscribe((videoGame: IContent) => {
      // console.log("Testing getting a single content item: ", videoGame);
       this.singleGame = videoGame;
    });

  }
}

import { Component } from '@angular/core';
import { VideoGameService } from './service/video-game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_Millerman_MyFavouriteNintendoGames';

  constructor(private videoGameService: VideoGameService) {
  }

}

import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { VideoGameService } from '../service/video-game.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit{
  videoGameArray: IContent[];

  constructor(private videoGameService: VideoGameService) {
    this.videoGameArray = [];
  }

  ngOnInit(): void {
    this.videoGameService.getContent().subscribe((videoGames: IContent[]) => {
      console.log("Getting the game list");
      this.videoGameArray = videoGames;
    });

    this.videoGameService.getContentItem(2).subscribe((videoGame: IContent) => {
      console.log("Testing getting a single content item: ", videoGame);
    });

    // let testGameToAdd: IContent = {
    //   id: 4,
    //   title: "The Last Of Us",
    //   description: "Some random guy takes on responsibility in a zombie game",
    //   author: "Naughty Dog",
    //   imgSrc: "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg",
    //   type: "zombie",
    // };

    // this.videoGameService.addContentItem(testGameToAdd).subscribe((videoGames: IContent[]) => {
    //   console.log("Testing adding a game to the array: ", videoGames);
    // });

    // let testGameToUpdate: IContent = {
    //   id: 1, // this means we're replacing WiiSports with this new game, cause it has the same id
    //   title: "The Last Of Us",
    //   description: "Some random guy takes on responsibility in a zombie game",
    //   author: "Naughty Dog",
    //   imgSrc: "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg",
    //   type: "zombie",
    // };

    // this.videoGameService.updateContentItem(testGameToUpdate).subscribe((videoGames: IContent[]) => {
    //   console.log("Testing updating a game in the array - Wii Sports should be replaced: ", videoGames);
    // });


    // this.videoGameService.deleteContentItem(3).subscribe((videoGame: IContent) => {
    //   console.log("Testing deleting a single item (goose game): ", videoGame);
    // });


  }
}

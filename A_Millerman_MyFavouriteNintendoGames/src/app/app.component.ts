import { Component } from '@angular/core';
import { ContentList } from './models/content-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_Millerman_MyFavouriteNintendoGames';
  videoGameList: ContentList;

  constructor() {
    this.videoGameList = new ContentList(); // calls the constructor from the ContentList object definition we wrote
    this.videoGameList.addContent({
      id: 0,
      title: "Solomon's Key",
      description: "A really difficult puzzle game on the original Nintendo console",
      author: "Tecmo",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/6/68/Solkeybox.jpg",
      type: "Puzzle",
      tags: ["Difficult", "Retro", "NES"]
    });
    this.videoGameList.addContent({
      id: 1,
      title: "Wii Sports",
      description: "The game that took the world by storm back in 2006, and had everyone exercising a lot more... for at least a week",
      author: "Nintendo",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/e/e0/Wii_Sports_Europe.jpg",
      type: "Simulation",
      tags: ["tennisWasGreat", "bowlingWasFun", "wiimoteWasAmazing"]
    });
    this.videoGameList.addContent({
      id: 2,
      title: "Super Smash Bros. Melee",
      description: "The best platform fighter game in the early 2000's",
      author: "HAL Laboratory",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/7/75/Super_Smash_Bros_Melee_box_art.png",
      type: "Platform Fighter",
      tags: ["PerfectlyImbalanced", "SkillCurveImbalance"]
    });
    this.videoGameList.addContent({
      id: 3,
      title: "Untitled Goose Game",
      description: "Pretend to be a goose while solving puzzles",
      author: "House House",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/b/b2/Untitled_Goose_Game_Cover_art.jpg",
      type: "Puzzle",
    });
  }
}

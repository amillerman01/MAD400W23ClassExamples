import { IContent } from "./icontent";

export class ContentList {
  private _videoGames: IContent[];
  constructor() {
    this._videoGames = [];
  }
  get videoGames(): IContent[]{
    return this._videoGames;
  }

  // Don't need the setter, but if we did it would look something like this
  // set videoGames(g: IContent[]){
  //   this._videoGames = g;
  // }
}

// example of what it looks like when we use the getter on a ContentList object
// let games = new ContentList();
// console.log(games.videoGames);

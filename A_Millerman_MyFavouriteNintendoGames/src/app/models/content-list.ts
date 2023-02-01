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

  addContent(newGame: IContent) {
    this._videoGames.push(newGame);
  }

  arrayLength(): number{
    return this._videoGames.length;
  }

  toString(index: number): string{
    const videoGame: IContent = this._videoGames[index];
    let prettyHtmlOutput = `
      <h2>${videoGame.title}</h2>
      <img src="${videoGame.imgSrc}">
      <p>${videoGame.description}</p>
      <div class="meta-data">
        <span class="author">${videoGame.author}</span>
        <span class="type">${videoGame.type}</span>
      </div>`; // this whole string started on line 27!

    if (videoGame.tags) // if our tags array exists
    {
      prettyHtmlOutput += '<div class="tags">'; // add a wrapper around the tags that are going to be added

      // I searched on google for a way to use foreach in javascript, and this is what came up
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
      videoGame.tags?.forEach((tag) => {
        prettyHtmlOutput += `<span>${tag}</span>`; // add each tag to the html output
      });

      prettyHtmlOutput += "</div>"; // close the wrapper around the tags that were added
    }
    return prettyHtmlOutput;
  }
}

/*
Fun fact - This weird anonymous function syntax from lines 40 - 42:

      () => {

      }

This is known as an Arrow Function. You can learn more about it here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
In C# and Java, you might know it better as a Lambda Expression
*/


// example of what it looks like when we use the getter on a ContentList object
// let games = new ContentList();
// console.log(games.videoGames);

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INVALIDGAME, VIDEOGAMES } from '../data/mock-content';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {

  constructor() { }

  getContent(): Observable<IContent[]> {
    return of(VIDEOGAMES);
  }

  getContentItem(index: number): Observable<IContent> {
    console.warn("Got to get content item");
    let videoGameFound: IContent | undefined;
    for (let i = 0; i < VIDEOGAMES.length; i++){
      if (VIDEOGAMES[i].id == index) {
        videoGameFound = VIDEOGAMES[i];
        break;
      }
    }
    if (!videoGameFound) { // never found a valid game
      return of(INVALIDGAME);
    }
    console.warn("Got the item", videoGameFound);
    return of(videoGameFound);
  }

  addContentItem(item: IContent): Observable<IContent[]>{
    // you can read more about how the find method works here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    if (VIDEOGAMES.find((game: IContent) => game.id === item.id) == undefined)
    {
      // no video games exist with that id, so we can safely add it to the array
      VIDEOGAMES.push(item);
    }
    return of(VIDEOGAMES);
  }

  updateContentItem(item: IContent): Observable<IContent[]>{
    let indexOfGameToUpdate = VIDEOGAMES.findIndex((game: IContent) => {
      // return if we found it or not. true if found, false if not
      return game.id === item.id;
    });
    if (indexOfGameToUpdate !== -1) {
      // only update it if the findIndex method actually found the item with that id
      // you can read more about findIndex here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
      VIDEOGAMES[indexOfGameToUpdate] = item;
    }
    return of(VIDEOGAMES);
  }

  deleteContentItem(index: number): Observable<IContent> {
    let videoGameFound: IContent | undefined;
    for (let i = 0; i < VIDEOGAMES.length; i++){
      if (VIDEOGAMES[i].id === index) {
        videoGameFound = VIDEOGAMES[i];
        delete VIDEOGAMES[i];
        console.log("Did the game get deleted? ", VIDEOGAMES);
        break;
      }
    }
    if (!videoGameFound) { // never found a valid game
      return of(INVALIDGAME);
    }
    return of(videoGameFound);
  }


}

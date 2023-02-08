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
    let videoGameFound: IContent = INVALIDGAME;
    for (let i = 0; i < VIDEOGAMES.length; i++){
      if (VIDEOGAMES[i].id == index) {
        videoGameFound = VIDEOGAMES[i];
        break;
      }
    }
    console.warn("Got the item", videoGameFound);
    return of(videoGameFound);
  }

  addContentItem(item: IContent): Observable<IContent[]>{
    VIDEOGAMES.push(item);
    return of(VIDEOGAMES);
  }

  updateContentItem(item: IContent): Observable<IContent[]>{
    let indexOfGameToUpdate = VIDEOGAMES.findIndex(game => {
      // return if we found it or not. true if found, false if not
      return game.id == item.id;
    });
    VIDEOGAMES[indexOfGameToUpdate] = item;
    return of(VIDEOGAMES);
  }

  deleteContentItem(index: number): Observable<IContent> {
    let videoGameFound: IContent = INVALIDGAME;
    for (let i = 0; i < VIDEOGAMES.length; i++){
      if (VIDEOGAMES[i].id == index) {
        videoGameFound = VIDEOGAMES[i];
        delete VIDEOGAMES[i];
        console.log("Did the game get deleted? ", VIDEOGAMES);
        break;
      }
    }
    return of(videoGameFound);
  }


}

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
    let videoGameFound: IContent = INVALIDGAME;
    for (let i = 0; i < VIDEOGAMES.length; i++){
      if (VIDEOGAMES[i].id == index) {
        videoGameFound = VIDEOGAMES[i];
      }
    }
    return of(videoGameFound);
  }
  addContentItem(item: IContent): Observable<IContent[]>{
    VIDEOGAMES.push(item);
    return of(VIDEOGAMES);
  }

}

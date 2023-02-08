import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VIDEOGAMES } from '../data/mock-content';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {

  constructor() { }

  getContent(): Observable<IContent[]> {
    return of(VIDEOGAMES);
  }

}

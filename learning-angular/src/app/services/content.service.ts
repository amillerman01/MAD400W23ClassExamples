import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONTENT } from '../data/mock-content-db';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent(): Observable<IContent[]> {
    return of(CONTENT);
  }

  getContentItem(index: number): Observable<IContent> {
    return of(CONTENT[index]);
  }
}

import { Injectable } from '@angular/core';
import { CONTENT } from '../data/mock-content-db';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent(): IContent[]{
    return CONTENT;
  }

}

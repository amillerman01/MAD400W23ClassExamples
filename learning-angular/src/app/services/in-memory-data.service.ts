import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CONTENT } from '../data/mock-content-db';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    // let cakes: IContent[] = [];
    let cakes: IContent[] = CONTENT;
    return { cakes };
  }

  // this runs when a new item is added to the database
  genId(cakes: IContent[]): number {
    if (cakes.length > 0) {
      let cakeIds: number[] = [];
      cakes.forEach((individualCake) => {
        cakeIds.push(individualCake.id);
      })


      // using the spread operator
      return Math.max(...cakeIds) + 1;

      // return Math.max(...cakes.map(c => c.id)) + 1;
    }

    return 0;

    // return cakes.length > 0 ?
    //   Math.max(...cakes.map(c => c.id)) + 1 : 0;
  }
}

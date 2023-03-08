import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContent } from '../models/icontent';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getContent(): Observable<IContent[]> {
    return this.http.get<IContent[]>("api/cakes");
  }

  getContentItem(index: number): Observable<IContent> {
    return this.http.get<IContent>("api/cakes/" + index)
  }

  addContent(singleCake: IContent): Observable<IContent> {
    return this.http.post<IContent>("api/cakes", singleCake, this.httpOptions);
  }
}

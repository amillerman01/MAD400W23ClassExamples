import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContent } from '../models/icontent';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  getContent(): Observable<IContent[]> {
    return this.http.get<IContent[]>("api/cakes");
  }

  getContentItem(index: number): Observable<IContent> {
    return this.http.get<IContent>("api/cakes/" + index)
  }
}

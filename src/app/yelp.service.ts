import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class YelpService {

  hostUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getData(searchValue: string){
    return this.http.post(this.hostUrl + 'getBusiness', {term : searchValue , location: 'san francisco'});
  }

  getComments(id: string){
    return this.http.post(this.hostUrl + 'reviews', {id: id});
  }

  getResults(query: string){
    return this.http.post(this.hostUrl + 'getResults', {id: query});
  }
}

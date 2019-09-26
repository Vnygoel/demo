import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURl='https://hn.algolia.com/api/v1';
  constructor(private http :HttpClient) { }

  getDataFromServer():Observable<any>{
   return this.http.get(this.apiURl+'/search_by_date?tags=story');
  }
}

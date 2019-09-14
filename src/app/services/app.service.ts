import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
// import { User } from '../models/user';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _getUser = 'http://localhost:5984/txhis/_design/view3/_view/new-view?include_docs=true';
  
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this._getUser)
      .pipe(map(response => {
        console.log('service -> get all flights here :', response)
        return response;
      }),
      retry(1),
      catchError(error => error))
  }


}

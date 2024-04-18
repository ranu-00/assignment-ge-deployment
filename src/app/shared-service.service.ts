import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  sharedValue: string = 'Default Value';

  constructor(private http:HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}

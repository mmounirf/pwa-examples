import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient) { }

  getData(): any {
    this.http.get<any[]>(environment.apiUrl).subscribe((resp) => {
      console.log(resp);
    }, (error) => {
      return error;
    });
  }

  authGet(): any {
    this.http.get('https://api.twitter.com/1.1/search/tweets.json?count=300&screen_name=twitterapi HTTP/1.1').subscribe((resp) => {
      console.log(resp);
    });
  }
}

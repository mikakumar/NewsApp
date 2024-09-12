import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsAPIService {
  constructor(private http: HttpClient) { }

  category!: String;
  apikey= '9cae80e5f310d5637baf4e0bc0a64a7b';
  private subject = new Subject<any>();


  baseURL= 'https://gnews.io/api/v4/top-headlines';

  homeDisplay():Observable<any>{
    return this.http.get(this.baseURL, {
      params: {
        category: 'general',
        apikey: this.apikey,
      }
    });
  }

  categoryDisplay(selectedCategory: any):Observable<any>{
    return this.http.get(this.baseURL, {
      params: {
        category: selectedCategory,
        apikey: this.apikey
      }
    });
  }

  searchNews(qdata: string){
    return this.http.get(this.baseURL, {
      params: {
        q: qdata,
        lang: 'en',
        apikey: this.apikey
      }
    })
  }

  sendEvent(result: any[]) {
    this.subject.next(result);
  }
  getEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }

}

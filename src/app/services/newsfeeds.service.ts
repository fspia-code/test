
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsfeedsService {

  API_Key:'6598b3959f7946e08e0c0f61cf8df983'

  constructor(private http:HttpClient) { }

  public getNews(){

    

    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=6598b3959f7946e08e0c0f61cf8df983`);

  }
}




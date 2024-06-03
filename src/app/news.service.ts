import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
   apikey='2f6bfd1ec9ea4580b29853c6d28383df'
    url='https://newsapi.org/v2/top-headlines?country=in&apiKey='+this.apikey;
    url1='https://newsapi.org/v2/everything?apiKey='+this.apikey;
    
  constructor(private http:HttpClient) { }
  getNews(){
     return this.http.get<any>(this.url)
  }

  getNewsByCategory(c:string){                     
     return this.http.get<any>(this.url+"&category="+c)
  }
   
  getNewsByQuery(q:string){       
   return this.http.get<any>(this.url1+"&q="+q)
}

  
}

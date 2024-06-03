import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// activetedroute je url ko padhta hai 

// first step how the work of header / routes .ts / components / 
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
    type='';
    str='';

    newsData=[{title:'',publishedAt:'',author:'',url:'',urlToImage:''}]
     constructor(private ns:NewsService ,private route:ActivatedRoute){
      this.route.params.subscribe((p)=>{
         this.type=p['type'];
         this.str=p['str'];
         
         if(this.type=='category')
         {
          this.ns.getNewsByCategory(this.str).subscribe((res)=>{this.newsData=res.articles;})
         }

          else if(this.type=='query')    
         {
          this.ns.getNewsByQuery(this.str).subscribe((res)=>{this.newsData=res.articles;})
         }
     
      else{
        this.ns.getNews().subscribe((res)=>{this.newsData=res.articles;})
      }
    
     })

    }}
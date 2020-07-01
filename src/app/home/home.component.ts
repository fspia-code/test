import { NewsfeedsService } from '../services/newsfeeds.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
articles: any

  constructor(private newsService: NewsfeedsService) { 
    // this.loadNews();
  }

  ngOnInit() {

    this.newsService.getNews().subscribe((data)=>{

      console.log(data);

      this.articles = data['articles'];

    });
  }
  
  // loadNews() {
  //   this.newsService.getNews("everything?q=bitcoin&from=2020-05-22&sortBy=publishedAt").subscribe( news => {
  //     this.articles = news['articles'];
  //     console.log(this.articles);
      
  //   })
  // }

}


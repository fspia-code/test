import { NewsfeedsService } from '../services/newsfeeds.service';
import { Component, OnInit } from '@angular/core';
import { NewsModel } from '../models/newsmodel';
import { Form } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { element } from 'protractor';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: any
  
    constructor(private newsService: NewsfeedsService) { 
      
    }
  
    ngOnInit() {
  
      this.newsService.getNews().subscribe((data)=>{
  
        console.log(data);
  
        this.articles = data['articles'];
  
      });
    }
}
import { Component } from '@angular/core';

import { NewsAPIService } from '../services/news-api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    
  searchTerm: any;
  searchNews: any[] = []

  constructor(private service: NewsAPIService) {}
  onSubmit(){
    this.service.searchNews(this.searchTerm).subscribe((result:any)=>{
      this.searchNews = result.articles; 
    });

    this.service.sendEvent(this.searchNews);
  }
}

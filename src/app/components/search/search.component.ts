import { Component, OnInit } from '@angular/core';
import { NewsAPIService } from '../../services/news-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  resultNews : any[] = []
  constructor(private service: NewsAPIService) {}

  ngOnInit(): void {
      this.service.getEvent().subscribe((result)=>{
        this.resultNews = result.articles;
      })
  }
}

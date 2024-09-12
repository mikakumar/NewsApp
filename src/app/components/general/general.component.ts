import { Component, OnInit } from '@angular/core';
import { NewsAPIService } from '../../services/news-api.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent implements OnInit {
  dailyNews:any[] = [];

  constructor(private service: NewsAPIService) {}

  ngOnInit(): void {
    this.service.homeDisplay().subscribe((result)=>{
      console.log(result)
      this.dailyNews = result.articles;
    })
  }
}

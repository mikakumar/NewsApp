import { Component, OnInit } from '@angular/core';
import { NewsAPIService } from '../../services/news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  dailyNews:any[] = [];

  constructor(private service: NewsAPIService) {}

  ngOnInit(): void {
    this.service.homeDisplay().subscribe((result)=>{
      console.log(result)
      this.dailyNews = result.articles;
    })
  }

}

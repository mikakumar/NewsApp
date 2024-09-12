import { Component, OnInit } from '@angular/core';
import { NewsAPIService } from '../../services/news-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  categoryNews:any[] = [];
  constructor(private route: ActivatedRoute, private service: NewsAPIService) {}

  ngOnInit(): void {

    this.route.params.forEach(params => {
      let category = params["category"];
      this.service.categoryDisplay(category).subscribe((result)=>{
        this.categoryNews = result.articles;
      })
    })
  }
}

import {Component, OnInit} from "@angular/core";
import {ContentService} from "./content.service";
import {Router} from "@angular/router";
import {Article} from "./content.interfaces";

@Component({
  selector: 'cont-app',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ContentService]
})

export class ContentComponent implements OnInit {
  public articles: Article[];

  constructor(private contentService: ContentService, private router: Router) {
  }


  ngOnInit() {
    // this.articles = this.contentService.articles;
    this.contentService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }

}






































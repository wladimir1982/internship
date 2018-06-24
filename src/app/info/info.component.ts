import {Component, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import { Location } from '@angular/common';
import {ContentService} from "../content/content.service";
import {Article} from "../content/content.interfaces";
import {mergeMap} from "rxjs/operators";



@Component({
  selector: 'inf-app',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})


export class InfoComponent implements OnInit, OnChanges {

  public articles: Article[];
  public article: Article;
  id: number;
  // email: string;
  // title: string;
  // description: string;

  constructor(private contentService: ContentService, private route: ActivatedRoute,  private location: Location) {

    // route.paramMap.subscribe(ParamsAsMap =>{
    //   this.id = parseInt(ParamsAsMap.get('id'));
    // });
  }

  ngOnInit() {
    console.log('Init');
    // this.id = +this.route.snapshot.params['id'];
    //
    // this.email = this.route.snapshot.queryParams['email'];
    // this.title = this.route.snapshot.queryParams['title'];
    // this.description = this.route.snapshot.queryParams['description'];

    this.route.params
      .pipe(
        mergeMap((params) => {
          this.id = +params['id'];
          return this.contentService.getArticles()
        })
      )
      .subscribe((articles: Article[]) => {
        console.log(this.route.snapshot);
        this.article = articles.find((a) => a.id === this.id);
    });

    // this.route.queryParams.subscribe(
    //   (queryParam: any) => {
    //     this.email = queryParam['email'];
    //     this.title = queryParam['title'];
    //     this.description = queryParam['description'];
    //   });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change');
  }

  goBack(): void {
    this.location.back();
  }

}
































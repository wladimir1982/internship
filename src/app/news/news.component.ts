import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";

@Component ({
  selector: 'news-app',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit, OnChanges{

  public visible: boolean = true;


 @Input() title: string;
 @Input() email: string;
 @Input() description: string;
 @Input() id: number;


 constructor() {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  public toggleDesc(): void {
    this.visible = !this.visible;
  }

}


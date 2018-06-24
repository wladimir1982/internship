import {Component, EventEmitter, Output} from "@angular/core";


@Component({
  selector: 'app-car',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})

export class TagsComponent {

  tagsNews = '';
  // public tagsArr = ['FordNews', 'AudiNews', 'ManNews'];
  public tagsArr = [];

  @Output() onAddNews = new EventEmitter<{tag: any[]}>();
  constructor() {
  }

  addTagNews() {
    this.tagsArr.push(this.tagsNews);
    this.onAddNews.emit({tag: this.tagsArr});
    this.tagsNews = '';
  }


  removeTagNews(n) {
    this.tagsArr.splice(n, 1);
  }

}















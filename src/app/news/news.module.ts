import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {NewsComponent} from "./news.component";
import {NewsChildComponent} from "./news-child/news-child.component";
import {NewsRoutingModule} from "./news-routing.module";



@NgModule({
  declarations: [
    NewsComponent,
    NewsChildComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  exports: [ NewsComponent ],
  providers: []
})

export class NewsModule {}

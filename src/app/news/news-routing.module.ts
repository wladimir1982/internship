import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {InfoComponent} from "../info/info.component";


const newsRoutes: Routes = [
  {path: 'info/:id', component: InfoComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(newsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export  class NewsRoutingModule {}

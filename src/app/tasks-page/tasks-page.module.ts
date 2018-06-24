import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TasksPageComponent} from "./tasks-page.component";
import {TaskComponent} from "./task/task.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormsRoutingModule} from "../registration-form/forms-routing.module";


@NgModule({
  declarations: [
    TasksPageComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: []
})
export class TasksPageModule {
}

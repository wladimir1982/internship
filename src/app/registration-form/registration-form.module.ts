import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsRoutingModule} from "./forms-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Ng2OrderModule } from 'ng2-order-pipe' ;

import {RegistrationFormComponent} from "./registration-form.component";
import {RegistrationFormOneComponent} from "./registration-form-one/registration-form-one.component";
import {RegistrationFormTwoComponent} from "./registration-form-two/registration-form-two.component";
import {RegistrationFormService} from "./registration-form.service";
import {UsersComponent} from "./users/users.component";
import {UsersService} from "./users/users.service";
import {SortPipe} from "./users/sort.pipe";
import {FilterPipe} from "./users/filter.pipe";




@NgModule({
  declarations: [
    RegistrationFormComponent,
    RegistrationFormOneComponent,
    RegistrationFormTwoComponent,
    UsersComponent,
    SortPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2OrderModule
  ],
  providers: [
    RegistrationFormService,
    UsersService
  ]
})
export class RegistrationFormModule {
}

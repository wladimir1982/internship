import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RegistrationFormComponent} from "./registration-form.component";
import {RegistrationFormOneComponent} from "./registration-form-one/registration-form-one.component";
import {RegistrationFormTwoComponent} from "./registration-form-two/registration-form-two.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



const formsRoutes: Routes = [
  {path: 'registration-form', component: RegistrationFormComponent},
  {path: 'one', component: RegistrationFormOneComponent},
  {path: 'two', component: RegistrationFormTwoComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(formsRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})

export  class FormsRoutingModule {

}

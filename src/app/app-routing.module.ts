import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ContentComponent} from "./content/content.component";
import {SetupPageComponent} from "./setup-page/setup-page.component";
import {TestComponent} from "./test/test.component";
import {RegistrationFormComponent} from "./registration-form/registration-form.component";
import {RegistrationComponent} from "./registration/registration.component";
import {UsersComponent} from "./registration-form/users/users.component";
import {TasksPageComponent} from "./tasks-page/tasks-page.component";




const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'setup', component: SetupPageComponent},
  {path: 'test', component: TestComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'users', component: UsersComponent},
  {path: 'tasks', component: TasksPageComponent}
  // {path: 'registration-form', component: RegistrationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

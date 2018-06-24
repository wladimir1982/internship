import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {NewsModule} from "./news/news.module";
import {TasksPageModule} from "./tasks-page/tasks-page.module";

import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ContentComponent} from "./content/content.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {SetupPageComponent} from './setup-page/setup-page.component';
import {InfoComponent} from "./info/info.component";
import {ContentService} from "./content/content.service";
import {SetupPageService} from "./setup-page/setup-page.service";
import {TagsComponent} from "./tags/tags.component";
import { TestComponent } from './test/test.component';
import { MinusComponent } from './test/minus/minus.component';
import {RegistrationFormModule} from "./registration-form/registration-form.module";
import { RegistrationComponent } from './registration/registration.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    FooterComponent,
    SetupPageComponent,
    InfoComponent,
    TagsComponent,
    TestComponent,
    MinusComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NewsModule,
    RegistrationFormModule,
    TasksPageModule
  ],
  providers: [ContentService, SetupPageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

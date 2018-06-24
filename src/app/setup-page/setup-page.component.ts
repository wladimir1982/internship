import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SetupPageService} from "./setup-page.service";


@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit {



  constructor(private setupPageService: SetupPageService) { }

  form: FormGroup;
  public  a;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
      title: new FormControl(''),
      text: new FormControl('')
    });
  }

  onSubmit() {
     let obj = {
       id: this.getRandomId(1, 1000000),
       tag: this.a.tag,
       email: this.form.value.email,
       title: this.form.value.title,
       description: this.form.value.text
     };
     // {}
     this.setupPageService.postArticles(obj)
      .subscribe((request: any) => console.log(request));
    console.log('Submited!', this.form.value);

  }


  updateNewsList(e: {tag: string}) {
    this.a = e;
  }

 getRandomId(min, max) {
   return Math.floor(min + Math.random() * (max + 1 - min));
  }

}



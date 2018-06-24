import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  public step = 1;
  public login: string;
  public password: string;
  public firstName: string;
  public lastName: string;

  constructor() {
  }

  ngOnInit() {
  }

  public nextStep() {
    this.step++;
  }

  public prevStep() {
    this.step--;
  }
}

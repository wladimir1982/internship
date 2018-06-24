import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {RegistrationFormService} from "../registration-form.service";
import {finalize} from "rxjs/operators";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {Router} from "@angular/router";


@Component({
  selector: 'app-registration-form-two',
  templateUrl: './registration-form-two.component.html',
  styleUrls: ['./registration-form-two.component.css']
})

export class RegistrationFormTwoComponent implements OnInit {
  public email: string = this.registrationFormService.obj.email;
  public password: string = this.registrationFormService.obj.password;
  public phone: any = this.registrationFormService.obj.phoneNumbers;
  public firstName: string = this.registrationFormService.obj.firstName;
  public lastName: string = this.registrationFormService.obj.lastName;
  public country: any = this.registrationFormService.obj.country;
  public city: string = this.registrationFormService.obj.city;
  public desc: string = this.registrationFormService.obj.desc;
  public loading: boolean = false;
  public success: boolean = false;
  public notSuccess: boolean = false;
  public buttons: boolean = true;


  constructor(private location: Location, private registrationFormService: RegistrationFormService, private router: Router) {
  }

  ngOnInit() {
    if (!this.email) {
      this.router.navigate(['']);
    }


  }


  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.loading = true;

    let obj = {
      email: this.email,
      password: this.password,
      phone: this.phone.value,
      firstName: this.firstName,
      lastName: this.lastName,
      country: this.country.name,
      city: this.city,
      desc: this.desc,
    };


    this.registrationFormService.postDataForm(obj)
      .pipe(finalize(() => {
        this.loading = false;
      }))
      .catch((error: any) => {
        this.notSuccess = true;
        return Observable.throw(error);
      })
      .subscribe((request: any) => {
          this.success = true;

        }

        //   (res) => {
        //     console.log(res);
        //   },
        //   () => {
        //
        //   }
      );

    this.buttons = false;

  }
}

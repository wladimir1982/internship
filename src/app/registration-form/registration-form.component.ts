import {Component, OnInit} from "@angular/core";
import {RegistrationFormService} from "./registration-form.service";
import {Router} from "@angular/router";
import {AbstractControl, FormControl, FormBuilder, FormGroup, Validators, FormArray} from "@angular/forms";


export const regExps: { [key: string]: RegExp } = {
  password: /^(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
  phone: /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/,
};

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})

export class RegistrationFormComponent implements OnInit {

  public form: FormGroup;

  constructor(private registrationFormService: RegistrationFormService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email ], this.checkForEmail],
      account: this.formBuilder.group({
        password: ['', [Validators.required, Validators.pattern(regExps.password)]],
        confirm: ['', [Validators.required]],
      }, {validator: this.passwordMatcher}),
      phoneNumbers: new FormArray([this.buildPhoneNumberComponent()])
    });
  }

  passwordMatcher(c: AbstractControl) {
    return c.get('password').value === c.get('confirm').value
      ? null : {'mismatch': true};
  }

  checkForEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@mail.ru') {
          resolve({
            'emailIsUsed': true
          });
        } else {
          resolve(null);
        }
      }, 3000);
    });
  }

  email: string = this.registrationFormService.obj.email;
  password: string = this.registrationFormService.obj.password;
  confirm: string = this.registrationFormService.obj.confirm;
  phoneNumbers: any = this.registrationFormService.obj.phoneNumbers;


  buildPhoneNumberComponent() {
    return new FormControl('', [Validators.required, Validators.pattern(regExps.phone)]);
  }


  addPhone() {
    (<FormArray>this.form.controls.phoneNumbers).push(this.buildPhoneNumberComponent());
  }

  removePhone(i: number) {
    (<FormArray>this.form.controls.phoneNumbers).removeAt(i);
  }

  goNext() {
    this.router.navigate(['/one']);
    this.registrationFormService.obj.email = this.email;
    this.registrationFormService.obj.password = this.form.get('account.password').value;
    this.registrationFormService.obj.phoneNumbers = <FormArray>this.form.controls.phoneNumbers;
  }

}

































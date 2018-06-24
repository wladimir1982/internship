import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {RegistrationFormService} from "../registration-form.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-registration-form-one',
  templateUrl: './registration-form-one.component.html',
  styleUrls: ['./registration-form-one.component.css']
})


export class RegistrationFormOneComponent implements OnInit {

  form: FormGroup;
  selectedCountryId: string;

  countries = [
    {id: 1, name: 'Ukraine'},
    {id: 2, name: 'Belarus'},
    {id: 3, name: 'Poland'},
    {id: 4, name: 'Bulgaria'},
    {id: 5, name: 'France'}
  ];

  cities = [];

  allCities = [
    {id: 1, name: 'Chernigov', country_id: 1},
    {id: 2, name: 'Odessa', country_id: 1},
    {id: 3, name: 'Kharkiv', country_id: 1},
    {id: 4, name: 'Kiev', country_id: 1},
    {id: 5, name: 'Poltava', country_id: 1},

    {id: 6, name: 'Minsk', country_id: 2},
    {id: 7, name: 'Grogno', country_id: 2},
    {id: 8, name: 'Polotsk', country_id: 2},
    {id: 9, name: 'Orsha', country_id: 2},
    {id: 10, name: 'Brest', country_id: 2},

    {id: 11, name: 'Warsaw', country_id: 3},
    {id: 12, name: 'Cracow', country_id: 3},
    {id: 13, name: 'Poznań', country_id: 3},
    {id: 14, name: 'Gdansk', country_id: 3},
    {id: 15, name: 'Wroclaw', country_id: 3},

    {id: 16, name: 'Varna', country_id: 4},
    {id: 17, name: 'Sofia', country_id: 4},
    {id: 18, name: 'Bourgas', country_id: 4},
    {id: 19, name: 'Plovdiv', country_id: 4},
    {id: 20, name: 'Bansko', country_id: 4},

    {id: 21, name: 'Paris', country_id: 5},
    {id: 22, name: 'Lion', country_id: 5},
    {id: 23, name: 'Bordo', country_id: 5},
    {id: 24, name: 'Nice', country_id: 5},
    {id: 25, name: 'Toulouse', country_id: 5}
  ];

  constructor(private location: Location, private registrationFormService: RegistrationFormService, private router: Router) {
  }

  firstName: string = this.registrationFormService.obj.firstName;
  lastName: string = this.registrationFormService.obj.lastName;
  country: string = this.registrationFormService.obj.country;
  city: string = this.registrationFormService.obj.city;
  desc: string = this.registrationFormService.obj.desc;



  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      country: new FormControl(''),
      city: new FormControl(''),
      desc: new FormControl('')
    });
  }


  goNext() {
    this.router.navigate(['/two']);
    this.registrationFormService.obj.firstName = this.firstName;
    this.registrationFormService.obj.lastName = this.lastName;
    this.registrationFormService.obj.country = this.countries
      .find((country) => country.id === +this.selectedCountryId);
    this.registrationFormService.obj.city = this.city;
    this.registrationFormService.obj.desc = this.desc;




    console.log(this.country);
  }

  goBack(): void {
    this.location.back();
  }

  change(id: string) {
    this.selectedCountryId = id;
    this.cities = this.allCities.filter((city)=> {
      return id === city.country_id.toString();
    });
  }


}
 // function test(a) {
 //  console.log(a);
 // }
 //
 // test('A');

// export const cyties = [
//   {
//     id: 1,
//     name: 'City',
//     country: '1'
//   }
// ];

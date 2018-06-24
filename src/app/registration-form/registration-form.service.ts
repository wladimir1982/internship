
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class RegistrationFormService {

  obj: any = {};

  constructor(private http: HttpClient) {}

  public postDataForm(value): Observable<any> {
    return this.http.post('https://angula-6580c.firebaseio.com/users.json', value);
  }

}

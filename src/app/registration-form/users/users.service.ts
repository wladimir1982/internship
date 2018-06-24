import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable()
export class UsersService {


  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http
      .get('https://angula-6580c.firebaseio.com/users.json')
      .pipe(
        map((request) => {
          return Object.values(request);
        })
      );
  }
}


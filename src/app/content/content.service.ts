import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/filter';
import {map} from "rxjs/operators";


@Injectable()
export class ContentService {


  constructor(private http: HttpClient) {

  }

  public getArticles(): Observable<any> {
    return this.http
      .get('https://angula-6580c.firebaseio.com/data.json')
      .pipe(
        map((request) => {
          return Object.values(request);
        })
      );
  }
}


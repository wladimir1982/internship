import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class SetupPageService {

  constructor(private http: HttpClient) {
  }

  public postArticles(value): Observable<any> {
    return this.http.post('https://angula-6580c.firebaseio.com/data.json', value);
  }
}

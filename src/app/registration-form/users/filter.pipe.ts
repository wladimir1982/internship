import {Pipe, PipeTransform} from "@angular/core";
import {User} from "./user.interfaces";


@Pipe({
  name: 'userFilter',
  pure: false
})

export class FilterPipe implements PipeTransform {


  transform(users: User[], filter: User): User[] {

    if (!users || !filter) {
      return users;
    }
    return users.filter((user: User) => this.applyFilter(user, filter));
  }


  applyFilter(user: User, filter: User): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (user[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        }
      }
    }
    return true;
  }
}




/*  transform(users: Array<any>, value: string): any {

    if (!users) return;
    if (!value) return users;

    if (value) {
      return users.filter(user => user.firstName.toLocaleLowerCase().lastIndexOf(value.toLocaleLowerCase()) > -1);
    } else {
      return users;
    }

    /!*return users.filter(user => {
      return user.firstName.toLowerCase().includes(value);
    })*!/
  }*/

import {Pipe, PipeTransform} from "@angular/core";
import {User} from "./user.interfaces";

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {


  transform(users: Array<any>, key: string, reverse: boolean): any {

    if (!users) {
      return;
    }

    users.sort((a: User, b: User) => {
      if ((a[key] > b[key]) || (reverse)) {
        return 1;
      } else if ((a[key] < b[key]) || (!reverse)) {
        return -1;
      } else {
        return 0;
      }
    });

    return users.sort((a: User, b: User) => {
      if (a[key] > b[key]) {
        return reverse ? 1 : -1;
      } else if (a[key] < b[key]) {
        return reverse ? -1 : 1;
      } else {
        return 0;
      }
    });

  }
}

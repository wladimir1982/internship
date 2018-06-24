import {Component, OnInit} from "@angular/core";
import {UsersService} from "./users.service";
import {User} from "./user.interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  public users: User[];
  public key: string = 'name';
  public reverse: boolean = false;
  public visible: boolean = true;
  public filter: User[];

  constructor (private usersService: UsersService) {}

  ngOnInit() {

    this.usersService.getUsers().subscribe(user => {
      this.users = user;
      this.filter = this.users;
    });
  }

  public sort(key): void {
    (this.key === key) ? this.reverse = !this.reverse : this.reverse = true;
     this.key = key;
  }

  public toggleFilter(): void {
    this.visible = !this.visible;
  }
}















































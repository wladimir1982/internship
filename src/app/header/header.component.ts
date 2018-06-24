import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Location} from "@angular/common";
import {filter} from "rxjs/operators";

@Component({
  selector: 'head-app',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {

  public nav: boolean = false;


  constructor(private router: Router, private  location: Location, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.router.events
      .pipe(
        filter((route: any) => (route instanceof NavigationEnd))
      )
      .subscribe((route) => {
        this.nav = this.location.path() !== '';
      })
  }

  goNav(a) {
    this.router.navigate([a || '']);
  }
}

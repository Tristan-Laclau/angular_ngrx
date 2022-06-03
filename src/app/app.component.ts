import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'airbus-app-ngrx';
  isConnected: boolean = false;
  navbarComponent!: NavbarComponent;

  constructor(
    public userService: UserService,
    private router: Router,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.verifyuser();
  }
  ngDoCheck(): void {
    this.verifyuser();
  }
  verifyuser() {
    if (this.userService.checkConnected()) {
      this.isConnected = true;
    } else {
      this.isConnected = false;
    }
  }
}

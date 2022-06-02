import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { User } from './model/user.model';
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
  user: User | undefined;

  constructor(public userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    if (this.userService.checkConnected() == true) {
      this.isConnected = true
    } else {
      this.isConnected = false
    }
    //console.log(this.isConnected)

  }
  ngDoCheck(): void {
   this.verifyuser()
  }
  verifyuser() {
    if (this.userService.checkConnected() == true) {
      this.isConnected = true
    } else {
      this.isConnected = false
    }
  }

}

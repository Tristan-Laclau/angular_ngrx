import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { NavbarComponent } from './components/navbar/navbar.component';
import { User } from './model/user.model';
import { UsersState } from './ngrx/users.state';
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
  user: User;
  usersState$: Observable<UsersState> | null = null

  
  constructor(public userService: UserService, private router: Router, private store: Store<any>) {
    this.user = { id: 99, login: "test@test.com", password: "test", isAdmin: false };
    // this.user = { id: 99, login: "test@test.com", password: "test", isAdmin: false };
    this.usersState$ = this.store.pipe(
      map(state => state.users )
    )
  }

  ngOnInit(): void {
    if (this.user.login != "test@test.com") {
      this.isConnected = true
    } else {
      this.isConnected = false
    }
    //console.log(this.isConnected)
   

  }
  ngDoCheck(): void {
  // this.verifyuser()
   // this.logUser()
  }
  verifyuser() {
    if (this.user.login != "test@test.com") {
      this.isConnected = true
    } else {
      this.isConnected = false
    }
  }
  logUser() {
    console.log(this.user)
  }

}

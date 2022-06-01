import { Component, OnInit} from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { User } from './model/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'airbus-app-ngrx';
  isConnected: boolean = false;
  navbarComponent!: NavbarComponent;
  user : User | undefined;

  constructor(public userService : UserService) {
    this.isConnected = userService.checkConnected();
    this.user=userService.getUser();

  }

  ngOnInit(): void {

  }

}

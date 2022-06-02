import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userService: UserService,private router :Router) { }

  user : User | undefined ;

  ngOnInit(): void {
    this.user = this.userService.getUser() ;
  }

  onLogout(){
    this.userService.logout();
    this.router.navigateByUrl('/')
  }

}

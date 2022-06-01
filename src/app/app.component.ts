import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'airbus-app-ngrx';
  isLogged!: boolean;
  navbarComponent!: NavbarComponent;
  constructor() {}

  ngOnInit(): void {
    this.isLogged = false;
  }

  // just to test loginMenu
  switchLogin() {
    this.isLogged = !this.isLogged;
  }
}

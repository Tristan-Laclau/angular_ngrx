import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;
  users: User[] | undefined;
  loginSuccess: boolean = false;
  // connectedUser : User = new User();

  constructor(private http: HttpClient, private router: Router) {}

  public getUsers(): Observable<User[]> {
    // let host = Math.random() > 0.1 ? environment.host : environment.unreachableHost;

    return this.http.get<User[]>(environment.host + '/users');
    //précisons dans la méthode get que nous attendons une liste d'utilisateurs
  }

  registerUser() {}

  //Renvoie la liste des utilisateurs avec un email correspondant au keyword passé en paramètre
  public searchUser(keyword: string): Observable<User[]> {
    return this.http.get<User[]>(environment.host + '/users?login=' + keyword);
  }

  public getTargetUser(keyword: string): Observable<User[]> {
    return this.http.get<User[]>(
      environment.host + '/users?login_like=' + keyword
    );
  }

  checkConnected() {
    return localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('user');
  }

  getUser(): User {
    let user = localStorage.getItem('user');
    if (user) return JSON.parse(user);
    return { id: 0, login: '', password: '', isAdmin: false };
  }
}

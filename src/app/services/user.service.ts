import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user : User | undefined;
users : User[] | undefined;

  constructor(private http:HttpClient) { }

  
  public getUsers(): Observable<User[]> {
    // let host = Math.random() > 0.1 ? environment.host : environment.unreachableHost;

    return this.http.get<User[]>(environment.host + "/users");
    //précisons dans la méthode get que nous attendons une liste d'utilisateurs     
  }

  registerUser(){}

  searchUser(){}
  //renvoi la liste d'avions contenant le mot clé
  // public searchAircrafts(keyword: string): Observable<Aircraft[]> {
  //   return this.http.get<Aircraft[]>(environment.host + "/aircrafts?prog_like=" + keyword)
  // }
  userLogIn(){}

  userLogOut(){}

  

}

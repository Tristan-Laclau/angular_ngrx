import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user : User | undefined;
users : User[] | undefined;

  constructor(private http:HttpClient) { }

  getUser(){}

  registerUser(){}

  searchUser(){}

  userLogIn(){}

  userLogOut(){}

  

}

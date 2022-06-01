import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';
import { UsersActions } from '../ngrx/users.actions';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user : User | undefined;
users : User[] | undefined;
loginSuccess : boolean = false;

  constructor(private http:HttpClient) { }

  
  public getUsers(): Observable<User[]> {
    // let host = Math.random() > 0.1 ? environment.host : environment.unreachableHost;

    return this.http.get<User[]>(environment.host + "/users");
    //précisons dans la méthode get que nous attendons une liste d'utilisateurs     
  }

  registerUser(){}

  //Renvoie la liste des utilisateurs avec un email correspondant au keyword passé en paramètre
  public searchUser(keyword: string): Observable<User[]>{
    return this.http.get<User[]>(environment.host + "/users?login="+keyword)
  }
  //renvoi la liste d'avions contenant le mot clé
  // public searchAircrafts(keyword: string): Observable<Aircraft[]> {
  //   return this.http.get<Aircraft[]>(environment.host + "/aircrafts?prog_like=" + keyword)
  // }

  userLogIn(data : any){
    if(this.searchUser(data.login) != null){
      this.searchUser(data.login).subscribe(rep => {
        console.log(rep)
        if(rep[0].password === data.password && rep[0].login === data.login){
            console.log("Vous êtes connectés")
            localStorage.setItem('user',JSON.stringify({login : rep[0].login , isAdmin : rep[0].isAdmin}))
            this.loginSuccess=true;
        }else{
          console.log("Echec de connexion")
          this.loginSuccess=false;
        }
      })
    }
  }

  getLoginSuccess(){
    return this.loginSuccess;
  }

  userLogOut(){}

  

}

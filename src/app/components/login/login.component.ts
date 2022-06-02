import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { select, Store } from '@ngrx/store';
import { UsersState, UsersStateEnum } from 'src/app/ngrx/users.state';
import { map, Observable } from 'rxjs';
import { GetAllUsersAction, GetTargetUserAction } from 'src/app/ngrx/users.actions';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})



export class LoginComponent implements OnInit, DoCheck {
  @Input() ngSwitchCase: any;

  listUsers: User[] | undefined
  userForm!: FormGroup;
  user: User | undefined;

  loginControl: String = "none"
  readonly usersStateEnum = UsersStateEnum

  usersState$: Observable<UsersState> | null = null

  data = {
    login: "",
    password: ""
  }

  constructor(formBuilder: FormBuilder, private store: Store<any>,private router:Router) {

    // this.user = { id: 99, login: "test@test.com", password: "test", isAdmin: false };

    // // A modifier ou retirer
    // this.userForm = formBuilder.group({
    //   login: [this.user.login, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
    //   password: [this.user.password, Validators.required]
    // })

    this.userForm = new FormGroup({
      login: new FormControl(this.data.login),
      password: new FormControl(this.data.password)
    })

  }

  ngOnInit() {

  }
  ngDoCheck(): void {
    this.checkUser()
  }

  checkUser() {
    this.usersState$ = this.store.pipe(
      map((state) => state.usersState)
    )
    this.usersState$?.subscribe(
      (data) => this.user = data.users[0]
    );

    console.log(this.user)
    return this.user
  }
 
  onLogin(form: FormGroup): void {

    //console.log(form.value);
    if (form.valid) {
      this.store.dispatch(new GetTargetUserAction(form.value.login))
     
      document.getElementById('submitBtn')?.classList.toggle("is_active")



      setTimeout(() => {
        
        this.checkUser()
           if (this.user && this.user.password === form.value.password) {
        console.log("Vous êtes connectés")
        localStorage.setItem('user', JSON.stringify({ login: this.user.login, isAdmin: this.user.isAdmin}))
        this.loginControl = "success";
      } else {
        console.log("Echec de connexion")
        this.loginControl = "error";
      }
      }, 2000);

    }

    setTimeout(() => {
      document.getElementById('submitBtn')?.classList.toggle("is_active")
      this.loginControl = "none";
      this.router.navigateByUrl('/')
    }, 1500);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { Store } from '@ngrx/store';
import { UsersState, UsersStateEnum } from 'src/app/ngrx/users.state';
import { map, Observable } from 'rxjs';
import { GetAllUsersAction, GetTargetUserAction } from 'src/app/ngrx/users.actions';
import { Router } from '@angular/router';
import { __values } from 'tslib';
// import { GetAllUsersAction, GetTargetUserAction } from 'src/app/ngrx/users.actions';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})



export class LoginComponent implements OnInit {
  @Input() ngSwitchCase: any;

  userForm!: FormGroup;
  user: User;
  loginControl: String = "none"
  readonly usersStateEnum = UsersStateEnum
  usersState$: Observable<UsersState> | null = null


  constructor(formBuilder: FormBuilder, private store: Store<any>) {

    this.user = { id: 99, login: "test@test.com", password: "test", isAdmin: false };

    // A modifier ou retirer
    this.userForm = formBuilder.group({
      login: [this.user.login, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: [this.user.password, Validators.required]
    })
    this.usersState$ = this.store.pipe(map(state => state))
    this.usersState$?.subscribe((__values) => { console.log("value" + __values.dataState) })

  }

  ngOnInit() {
    this.test()
  }
  test() {
    this.usersState$?.subscribe((__values) => { console.log("value" + __values.dataState) })
  }
  onLogin(form: FormGroup): void {

    //console.log(form.value);
    if (form.valid) {
      this.store.dispatch(new GetTargetUserAction(form.value.login))

      //this.userService.userLogIn({ login: form.value.login, password: form.value.password });

      document.getElementById('submitBtn')?.classList.toggle("is_active")

       this.test()

      if (this.user.password === form.value.password) {
        this.loginControl = "success";
      } else {
        this.loginControl = "error";
      }

    }

    setTimeout(() => {
      document.getElementById('submitBtn')?.classList.toggle("is_active")
      this.loginControl = "none";
    }, 1500);
  }

}

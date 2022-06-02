import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { GetAllUsersAction } from 'src/app/ngrx/users.actions';
import { UsersState, UsersStateEnum } from 'src/app/ngrx/users.state';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input() ngSwitchCase: any;

  userForm!: FormGroup;
  user: User;
  loginControl : String = "none"
  readonly usersStateEnum = UsersStateEnum
  usersState$: Observable<UsersState> | null = null

  constructor(formBuilder: FormBuilder, private store: Store<any>, private userService: UserService, private router : Router) {
    this.user = { id: 99, login: "test@test.com", password: "test", isAdmin: false };                           // A modifier ou retirer
    this.userForm = formBuilder.group({
      login: [this.user.login, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: [this.user.password, Validators.required]
    })
  }

  ngOnInit() {

    this.getAllUser()

    this.userService.getUsers().subscribe({
      next:(data)=>console.log(data)
    })

    // this.userService.searchUser("Hugo@mail.com").subscribe({
    //   next:(data)=>console.log(data)
    // })

  }
  getAllUser() {
    this.usersState$ = this.store.pipe(
      map((state) => state.UsersState)
    )
  }
  onLogin(form: FormGroup): void {
    this.store.dispatch(new GetAllUsersAction({}))

    //console.log(form.value);
    if (form.valid) {
      this.user.login = form.value.login
      this.user.password = form.value.password

      this.userService.userLogIn({login : form.value.login, password :form.value.password});
      if (this.userService.getLoginSuccess()){
        this.loginControl="success";
      }else{
        this.loginControl="error";
      }
      //console.log(this.user)
      document.getElementById('submitBtn')?.classList.toggle("is_active")
    }

    setTimeout(() => {
      document.getElementById('submitBtn')?.classList.toggle("is_active")
      this.loginControl = "none";
    }, 1500);
  }

  // onLogin2(form: FormGroup): void{
  //   this.store.dispatch(new GetTargetUserAction(form.value.login, form.value.password));
  // }

}

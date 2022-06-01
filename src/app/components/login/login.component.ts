import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { Store } from '@ngrx/store';
import { UsersState, UsersStateEnum } from 'src/app/ngrx/users.state';
import { map, Observable } from 'rxjs';
import { GetAllUsersAction } from 'src/app/ngrx/users.actions';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  userForm!: FormGroup;
  user: User;
  display = false;
  problemLogin = false;
  readonly usersStateEnum = UsersStateEnum
  usersState$: Observable<UsersState> | null = null

  constructor(formBuilder: FormBuilder, private store: Store<any>, private userService: UserService) {
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

  }
  getAllUser() {
    this.usersState$ = this.store.pipe(
      map((state) => state.UsersState)
    )
  }
  onLogin(form: FormGroup): void {
    this.store.dispatch(new GetAllUsersAction({}))

    console.log(form.value);
    if (form.valid) {
      this.user.login = form.value.login
      this.user.password = form.value.password

      console.log(this.user)
      document.getElementById('submitBtn')?.classList.toggle("is_active")


    }
    setTimeout(() => {
      document.getElementById('submitBtn')?.classList.toggle("is_active")
    }, 1500);
  }


}

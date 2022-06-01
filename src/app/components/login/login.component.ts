import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  userForm!: FormGroup;
  user: User;
  display = false;
  problemLogin = false;

  constructor(formBuilder: FormBuilder, userService: UserService) {
    this.user = { id: 99, login: "test@test.com", password: "test", isAdmin: false };                           // A modifier ou retirer
    this.userForm = formBuilder.group({
      login: [this.user.login, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: [this.user.password, Validators.required]
    })
  }

  ngOnInit() {

  }
  getAllUser() {

  }
  onLogin(form: FormGroup): void {
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

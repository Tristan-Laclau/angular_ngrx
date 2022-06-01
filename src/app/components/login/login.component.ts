import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userForm! : FormGroup;
user : User ;

  constructor(formBuilder:FormBuilder) { 
    this.user = {id:0,login:"",password:"",isAdmin:false};                           // A modifier
    this.userForm = formBuilder.group({
      login : [this.user.login, Validators.required],
      password : [this.user.password, Validators.required]
    })
   }



  ngOnInit(): void {
  }

  onLogin(userForm:FormGroup) {
    console.log(userForm);
    console.log("***************************");
  }

}

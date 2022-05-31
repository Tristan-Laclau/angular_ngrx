import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

    ngForm: FormGroup
    data = {
        email: "",
        password: ""
    }
    display = false
    problemLogin = false


    constructor() {
        this.ngForm = new FormGroup({
            email: new FormControl(this.data.email),
            password: new FormControl(this.data.password)
        })
    }

    ngOnInit() {

    }

    onLogin(form: FormGroup): void {
        console.log(form.value);
        if (form.valid) {
            this.data.email = form.value.email
            this.data.password = form.value.password

            console.log(this.data)
            document.getElementById('submitBtn')?.classList.toggle("is_active")


        }
        setTimeout(() => {
            document.getElementById('submitBtn')?.classList.toggle("is_active")
        }, 1500);
    }


}
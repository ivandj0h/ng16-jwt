import {Component, OnInit} from '@angular/core';
import {LoginModel} from "../../auth/login-model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: LoginModel = {
    username: '',
    password: ''
  }

  constructor() {}

  ngOnInit() {}

  userLogin() {
    console.log('user login');
  }
}

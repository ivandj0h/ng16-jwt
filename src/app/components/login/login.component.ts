import {Component, OnInit} from '@angular/core';
import {LoginModel} from "../../auth/login-model";
import {AuthService} from "../../shared/auth/auth.service";

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

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  userLogin() {
    console.log(this.authService.userLogin(this.loginForm));

    this.authService.userLogin(this.loginForm).subscribe(
      data => {
        if (data) {
          console.log(data);
        } else {
          console.log('error');
        }
      })
  }
}

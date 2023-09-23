import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginModel} from "../../auth/login-model";
import {catchError, map, of} from "rxjs";
import {TokenModel} from "./token-model";
import { BaseUrl } from "../constants/base-url";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  userLogin(payload:LoginModel){
    return this.http.post(BaseUrl + '/auth/login', payload)
      .pipe(
        map(
          (data) => {
            var tokens = data as TokenModel

            // save tokens to local storage
            localStorage.setItem('access_token',JSON.stringify(tokens))

            return true;
          }
        ),
        catchError(
          (err) => {
            console.log('error',err)
            return of(false)
          }
        )
      )
  }
}

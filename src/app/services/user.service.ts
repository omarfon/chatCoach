import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private SERVER = "https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/";
  private SERVER2 = "https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/auth/login-coach"
  apiUrl = `${this.SERVER}users/public-authorization`;


  constructor(public http:HttpClient) { }

  getKey(){
    return this.http.get(this.apiUrl).pipe(
      map(data =>{
        return data
      })
    )
  }

  doSignIn(email, password){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({'Authorization': authorization});

    let params = {email: email, password: password}
      return this.http.post(this.SERVER2 , params, {headers}).pipe( 
              map(data =>{
              return data
        })
      )
}

}
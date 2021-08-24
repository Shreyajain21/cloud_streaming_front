import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private _http:HttpClient) { }
  public forgotPass(obj:any):Observable<any>{
    console.log(obj);
      return this._http.post("http://localhost:8080/User/forgotPassword",obj);
  }
}

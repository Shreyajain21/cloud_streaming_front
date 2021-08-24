import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpVerifyService {

  constructor(private http:HttpClient) { }
  public otpVerify(otp: any, data:any):Observable<any>{
  return this.http.get("http://localhost:8080/User/verifyUserOtp/:otp", {params:data});
    };
  
}

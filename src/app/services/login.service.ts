import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
constructor(private http:HttpClient) { }
public signin(data:any):Observable<any>{
return this.http.post("http://localhost:8080/User/loginUser", {params:data});
  };
}

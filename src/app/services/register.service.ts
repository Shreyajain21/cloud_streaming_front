import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http:HttpClient) { }
  public register(obj:any):Observable<any>{
    console.log("service",obj);
      return this._http.post("http://localhost:8080/User/signUpUser",obj);
      
  }
}

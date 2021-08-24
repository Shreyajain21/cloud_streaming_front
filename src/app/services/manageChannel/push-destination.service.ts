import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PushDestinationService {
  constructor(private http:HttpClient) { }
  public createEvent(data:any):Observable<any>{
  return this.http.post("http://localhost:8080//",data);
    };
    public getEvent(data:any):Observable<any>{
      return this.http.get("http://localhost:8080//", {params:data});
        };
}

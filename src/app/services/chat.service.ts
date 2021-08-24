import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient) { }
public createChat(data:any):Observable<any>{
return this.http.post("http://localhost:8080//createChat",data);
  };
  public deleteChat(data:any):Observable<any>{
    return this.http.post("http://localhost:8080//deleteChat",data);
      };
  public getChat(data:any):Observable<any>{
    return this.http.get("http://localhost:8080//chatlist", {params:data});
      };
}

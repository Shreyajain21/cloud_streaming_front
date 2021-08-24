import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelSettingsService {

  constructor(private http:HttpClient) { }
  public createPlayer(data:any):Observable<any>{
  return this.http.post("http://localhost:8080//",data);
    };
    public getPlayer(data:any):Observable<any>{
      return this.http.get("http://localhost:8080//", {params:data});
        };
        // delete(id:any):Observable<any>{
        //   return this._http.delete("http://localhost:8080//"+id);
        //     }
}

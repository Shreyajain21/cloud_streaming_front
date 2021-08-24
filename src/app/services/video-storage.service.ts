import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoStorageService {

  constructor(private http:HttpClient) { }
public addImage(data:any):Observable<any>{
return this.http.post("http://localhost:8080/VedioStorage/createVedioStorage",data);
  };
  public editVideoStorage(id:any,data:any):Observable<any>{
    return this.http.put("http://localhost:8080/VedioStorage/createVedioStorage/"+id,data);
      };
      public deleteVideoStorage(id:any):Observable<any>{
        return this.http.delete("http://localhost:8080/VedioStorage/createVedioStorage/"+id);
          };

  public getEvent(data:any):Observable<any>{
    return this.http.get("http://localhost:8080/VedioStorage/getListing/", {params:data});
      };
}

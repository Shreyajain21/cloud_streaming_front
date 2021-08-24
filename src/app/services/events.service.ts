import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }
public createEvent(data:any):Observable<any>{
return this.http.post("http://localhost:8080/event/createEventChannel",data);
  };
  public editEvent(data:any):Observable<any>{
    return this.http.post("http://localhost:8080/event/editEventChannel",data);
      };
  public getEvent(data:any):Observable<any>{
    return this.http.get("http://localhost:8080/event/eventList", {params:data});
      };
      public deleteEvent(data:any):Observable<any>{
        return this.http.post("http://localhost:8080/event/deleteEventChannel",data);
          };
}

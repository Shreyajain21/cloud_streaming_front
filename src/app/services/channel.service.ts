import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private _http:HttpClient) { }
  adddingChannel(obj:any):Observable<any>{
return this._http.post("/65.21.151.67:8080/channel/createChannel",obj);
  }
  // addImage():Observable<any>{
  // }
  editChannel(id:any,obj:any):Observable<any>{
    return this._http.put("65.21.151.67:8080/channel/editChannel",+id,obj);
      }
  getChannelListData():Observable<any>{
    return this._http.get("65.21.151.67:8080/channel/getChannelList");
  }
  getUserChannelListData():Observable<any>{
    return this._http.get("65.21.151.67:8080/channel/userChannelList");
  }
  deleteChannel(id:any):Observable<any>{
    return this._http.delete("65.21.151.67:8080/channel/deleteChannel"+id);
      }
}

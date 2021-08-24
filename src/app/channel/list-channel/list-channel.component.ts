import { Component, OnInit } from '@angular/core';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-list-channel',
  templateUrl: './list-channel.component.html',
  styleUrls: ['./list-channel.component.css']
})
export class ListChannelComponent implements OnInit {
channelDetails: any=[];
header = {
  title:"",
  select_channel:"",
  push_destination:"",
  add_Channel:""
}
  constructor(private _service:ChannelService) { }
  // getColor(badge) { (2)
  //   switch (badge) {
  //     case 'Unpublished':
  //       return 'red';
  //     case 'Published':
  //       return 'green';     
  //   }
  // }
  ngOnInit(): void {
   this.getChannelList();
  }
getChannelList(){
  this._service.getChannelListData().subscribe(res=>{
    if(res){
      this.channelDetails=res;
    }
  })
}
}

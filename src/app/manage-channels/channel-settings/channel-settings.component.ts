import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-settings',
  templateUrl: './channel-settings.component.html',
  styleUrls: ['./channel-settings.component.css']
})
export class ChannelSettingsComponent implements OnInit {
  settingsName:any='RTMP_Settings';
  header = {
    title:"Channel Settings",
    selectChannel:true,
    pushDest:false,
    add_Channel:""
  }

  constructor() { 
   
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hls-settings',
  templateUrl: './hls-settings.component.html',
  styleUrls: ['./hls-settings.component.css']
})
export class HlsSettingsComponent implements OnInit {
  hlsContinuousMode:boolean=false;
  hlsNestedMode:boolean=false;
  hlsCleanup:boolean=false;
  hlsKeys:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  onHlsSetting(){
    
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-settings',
  templateUrl: './dash-settings.component.html',
  styleUrls: ['./dash-settings.component.css']
})
export class DashSettingsComponent implements OnInit {

  dash:boolean=false;
  dashCleanup:boolean=false;
  dashNested:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  onHlsSetting(){
    
  }
}
import { AnimationTriggerMetadata } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Rotate } from 'hammerjs';
import { $ } from 'protractor';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
expand:any;
collapse:any;
expandPushDest:any= true;
expands:any;


  constructor() { 
  }

  ngOnInit(): void {
  }
  
}

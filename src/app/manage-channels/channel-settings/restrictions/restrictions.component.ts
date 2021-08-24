import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restrictions',
  templateUrl: './restrictions.component.html',
  styleUrls: ['./restrictions.component.css']
})
export class RestrictionsComponent implements OnInit {

  dashNested:boolean=false;

  constructor() {
    
   }

  ngOnInit(): void {
  }
  onAddDomain(){

  }
  onMinusDomain(){

  }
  
}

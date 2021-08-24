import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  // title:any;
  header:any;
  pushDest:any;
  selectChannel:any;
  addChannel:any;
  bulkOperation:any;
@Input('header') set setHeader(value:any){
  if(value){
    // this.title=value;
    this.header=value;
    
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}

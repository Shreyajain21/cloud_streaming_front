import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmindashboard',
  templateUrl: './addmindashboard.component.html',
  styleUrls: ['./addmindashboard.component.css']
})
export class AddmindashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  header = {
    title:"Recording",
    selectChannel:true,
    pushDest:false,
    add_Channel:""
  }

}

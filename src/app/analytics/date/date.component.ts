import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  remainingText:any;
  
  constructor() { }

  ngOnInit(): void {
  }
  valueChange(value:any) {
    this.remainingText = 1000 - value;
   }
}

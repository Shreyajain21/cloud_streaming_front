import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedule-event',
  templateUrl: './schedule-event.component.html',
  styleUrls: ['./schedule-event.component.css']
})
export class ScheduleEventComponent implements OnInit {
  eventDetailsForm:FormGroup;
  submitted = false;
  remainingText=0;
  maxChars = 1000;
  minChars = 0;
  constructor(private modalService:NgbModal,private formBuilder:FormBuilder) { 

  this.eventDetailsForm = this.formBuilder.group({     
    eventTitle: ['', Validators.required],
    date : ['', Validators.required],
    startAt :  ['', Validators.required],
    eventDetails: [ '',Validators.required]
    })
  }
  get f() {
    return this.eventDetailsForm.controls;
  }

  ngOnInit(): void {
  }
  openinfo(chooseEventType:any){
    this.modalService.open(chooseEventType, 
      { windowClass: 'light-modal', size: 'lg'}).result.then((result) => {          
    });  
}
valueChange(event:any) {
  this.remainingText = this.minChars + event.length;

  // this.remainingText = this.maxChars - event.length;
 }
createNewevent(){

}
 
}

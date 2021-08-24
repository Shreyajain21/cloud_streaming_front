import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  eventDetailsForm:FormGroup;
  submitted = false;
  remainingText=0;
  maxChars = 1000;
  minChars = 0;
  expands:any;
  eventsListData:any;
  constructor(private formBuilder:FormBuilder, private modalService:NgbModal,private router:Router,private eventService:EventsService) {

  this.eventDetailsForm = this.formBuilder.group({     
    eventTitle: ['', Validators.required],
    date : ['', Validators.required],
    startAt :  ['', Validators.required],
    eventDetails:  ''  
    })
  }
  get f() {
    return this.eventDetailsForm.controls;
  }

  ngOnInit(): void {
  }

  getEventList(){
    this.eventService.getEvent(this.eventDetailsForm.value).subscribe(res=>{
      console.log(res,"save");
        this.eventsListData=res;
    });
  }
  openCreatEvent(createNewEvent:any){
    this.modalService.open(createNewEvent, 
      { windowClass: 'light-modal', size: 'lg'}).result.then((result) => {          
    });  
  }
  valueChange(event:any) {
    this.remainingText = this.minChars + event.length;

    // this.remainingText = this.maxChars - event.length;
   }
  
  openinfo(choosevideo:any){
    this.modalService.open(choosevideo, 
      { windowClass: 'light-modal', size: 'lg'}).result.then((result) => {          
    });  
} 
openEdit(editEvent:any){
  this.modalService.open(editEvent, 
    { windowClass: 'light-modal', size: 'lg'}).result.then((result) => {          
  });  
}
openInvitePeople(invitePeople:any){
  this.modalService.open(invitePeople, 
    { windowClass: 'light-modal', size: 'lg'}).result.then((result) => {          
  });  
}
openDeleteEvent(deleteEvent:any){
  this.modalService.open(deleteEvent, 
    { windowClass: 'light-modal', size: 'lg'}).result.then((result) => {          
  });  
}

onCopy(inputElement:any){
  inputElement.select();
  document.execCommand('copy');
  inputElement.setSelectionRange(0, 0);
}
onPeopleInvite(){

}
onSendEmail(){
  
}
onCreateNewEvent(){
  if(this.eventDetailsForm.invalid)
  return;
  else{
  console.log("before");
    this.eventService.createEvent(this.eventDetailsForm.value).subscribe(res=>{
      console.log(res,"save");
      if(res){
        this.router.navigate(['/']);
      }
    }); 
}  
}
onEditEvent(){
  this.eventService.editEvent(this.eventDetailsForm.value).subscribe(res=>{
    // console.log(res,"save");
    if(res){
      this.router.navigate(['/']);
    }
  }); 
}
onDeleteEvent(id:any){
  this.eventService.deleteEvent(id).subscribe(res=>{
    console.log(res,"deleteRes");
    if(res){
      this.getEventList();
    }
  }); 
}
}

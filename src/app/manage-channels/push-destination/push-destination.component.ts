import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-push-destination',
  templateUrl: './push-destination.component.html',
  styleUrls: ['./push-destination.component.css']
})
export class PushDestinationComponent implements OnInit {
  pushDestination:FormGroup;
  submitted:boolean=false;
  send:any;
  header = {
    title:"Push Destinations",
    selectChannel:true,
    pushDest:true,
    add_Channel:"",
    bulkOperation:true
  }
  constructor(private formBuilder:FormBuilder) {
    this.pushDestination = this.formBuilder.group({
      channelName: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      channelLogo: ['', Validators.required],
      // channelType:  ['', Validators.required],
      streamName: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      password: ['', Validators.required],

    });
    // this.send="Push Destinations"
   }
   get f() {
    return this.pushDestination.controls;
  }
  ngOnInit(): void {
  }

}

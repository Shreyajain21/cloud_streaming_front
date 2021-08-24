import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent implements OnInit {
  DestinationDetailForm:FormGroup;
  submitted:boolean=false
  constructor(private formBuilder:FormBuilder) {
    this.DestinationDetailForm = this.formBuilder.group({
      channelName: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      channelLogo: ['', Validators.required],
      // channelType:  ['', Validators.required],
      streamName: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      password: ['', Validators.required],

    });
   }
   get f() {
    return this.DestinationDetailForm.controls;
  }
  ngOnInit(): void {
  }

}

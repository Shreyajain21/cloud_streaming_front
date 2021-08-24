import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-flv-recording',
  templateUrl: './flv-recording.component.html',
  styleUrls: ['./flv-recording.component.css']
})
export class FlvRecordingComponent implements OnInit {
  FlvRecordingForm:FormGroup;
  submitted:boolean=false;
  recordUnique:boolean=false;
  recordLock:boolean=false;
  recordAppend:boolean=false;
  notify:boolean=false;
  constructor(private formBuilder:FormBuilder) {
    this.FlvRecordingForm = this.formBuilder.group({
      profile: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      profileName: ['', Validators.required],
      streamName: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      fileName: ['', Validators.required],
      recordUnique:  [this.recordUnique, Validators.required], 
      recordAppend: [this.recordAppend, Validators.required],
      recordLock: [this.recordLock, Validators.required],
      recordMaxSize: ['', Validators.required],
      interval: ['', Validators.required],
      notify: [this.notify, Validators.required],
    });
  }
  get f() {
    return this.FlvRecordingForm.controls;
  }

  ngOnInit(): void {
  }
  onAddProfile(){

  }
  onViewProfile(){

  }
  onDeleteProfile(){
    
  }
  onflvRecording(){
    
  }
  onflvCancel(){

  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hls-recording',
  templateUrl: './hls-recording.component.html',
  styleUrls: ['./hls-recording.component.css']
})
export class HlsRecordingComponent implements OnInit {
  hlsRecordingForm:FormGroup;
  submitted:boolean=false
  hlsRecording:boolean=false;
  securePlay:boolean=false;
  constructor(private formBuilder:FormBuilder) {
    this.hlsRecordingForm = this.formBuilder.group({
      hlsRecording: [this.hlsRecording, Validators.required],
      fileName: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      channelLogo: ['', Validators.required],
      // channelType:  ['', Validators.required],
      streamName: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      password: ['', Validators.required],

    });
  }
  get f() {
    return this.hlsRecordingForm.controls;
  }

  ngOnInit(): void {
  }
  onHlsRecording(){
    
  }
}



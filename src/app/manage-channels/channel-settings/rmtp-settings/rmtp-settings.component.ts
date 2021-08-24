import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rmtp-settings',
  templateUrl: './rmtp-settings.component.html',
  styleUrls: ['./rmtp-settings.component.css']
})
export class RmtpSettingsComponent implements OnInit {

  rtmpSettingsForm:FormGroup;
  submitted:boolean=false;
  interleave:boolean=false;
  dropIdle:boolean=false;
  enableDisable:boolean=false;
  idleStreams:boolean=false;
  playRestart:boolean=false;
  publishNotify:boolean=false;
  waitVideo:boolean=false;
  waitKey:boolean=false;
  constructor(private formBuilder:FormBuilder) {
    this.rtmpSettingsForm = this.formBuilder.group({
      channelName: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      channelLogo: ['', Validators.required],
      // channelType:  ['', Validators.required],
      streamName: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      password: ['', Validators.required],
    });
   }
   get f() {
    return this.rtmpSettingsForm.controls;
  }
  ngOnInit(): void {
  }
  onRtmpSetting(){

  }
}


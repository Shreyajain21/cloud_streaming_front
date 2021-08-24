import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-preset',
  templateUrl: './update-preset.component.html',
  styleUrls: ['./update-preset.component.css']
})
export class UpdatePresetComponent implements OnInit {

  submitted:boolean=false
  PresetDetailsForm:FormGroup
  constructor(private formBuilder:FormBuilder) {
    this.PresetDetailsForm = this.formBuilder.group({
      channelName: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      channelLogo: ['', Validators.required],
      // channelType:  ['', Validators.required],
      streamName: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      password: ['', Validators.required],
    });
    }
  get f() {
    return this.PresetDetailsForm.controls;
  }
  ngOnInit(): void {
  }
  updatePreset(){}
}

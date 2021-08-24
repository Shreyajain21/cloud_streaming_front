import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mp4-recording',
  templateUrl: './mp4-recording.component.html',
  styleUrls: ['./mp4-recording.component.css']
})
export class Mp4RecordingComponent implements OnInit {

  mp4RecordingForm:FormGroup;
  submitted:boolean=false
  mp4Recording:boolean=false;

  constructor(private formBuilder:FormBuilder) {
    this.mp4RecordingForm = this.formBuilder.group({
      fileName: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      mp4Recording: ['', Validators.required],
    });
  }
  get f() {
    return this.mp4RecordingForm.controls;
  }

  ngOnInit(): void {
  }
  onMp4Recording(){
    
  }
}

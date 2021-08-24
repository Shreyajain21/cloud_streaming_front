import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  passwordForm:FormGroup;
submitted:boolean=false;
constructor(private formBuilder:FormBuilder) {
  this.passwordForm = this.formBuilder.group({
    channelName: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
    channelLogo: ['', Validators.required],
    // channelType:  ['', Validators.required],
    streamName: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
    password: ['', Validators.required],
  });
 }
  get f() {
    return this.passwordForm.controls;
  }
  ngOnInit(): void {
  }

}

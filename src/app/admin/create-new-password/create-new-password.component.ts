import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResetPasswordService } from 'src/app/services/reset-password.service';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.css']
})
export class CreateNewPasswordComponent implements OnInit {
  createPass:FormGroup;
  submitted=false;
  results:any
  constructor(private formBuilder:FormBuilder, public resetPass : ResetPasswordService) { 
    this.createPass = this.formBuilder.group({
      upwd: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      cupwd: ['', Validators.required]
   });
  }
  get f() {
    return this.createPass.controls;
  }
  ngOnInit(): void {
  }
  resetPassword() {
    this.submitted = true;
    if(this.createPass.invalid){
    return
    }
    else{
      this.resetPass.passReset(this.createPass.value)
        .subscribe((posRes)=>{
         this.results=posRes
        });
}
}
}
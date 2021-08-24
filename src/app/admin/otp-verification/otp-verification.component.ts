import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OtpVerifyService } from 'src/app/services/otp-verify.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {
  otpDetailForm:FormGroup
  otpData:any;
  email:any;
  constructor(private _service:OtpVerifyService, private formBuilder:FormBuilder, private router:Router) { 
    this.otpDetailForm = this.formBuilder.group({
      otp: ['', Validators.required]  
   });
  }
  // get f() {
  //   // return this.UserDetails.controls;
  // }
  ngOnInit(): void {

  }
  onSubmit(){

  }
  otpVerification(){
    this._service.otpVerify(this.otpDetailForm.value['otp'], this.otpDetailForm.value).subscribe(res=>{
          this.otpData=res;
     
        this.router.navigate(['/login'])
    })
  }
}

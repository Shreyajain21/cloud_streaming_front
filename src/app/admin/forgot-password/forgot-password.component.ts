import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';
import { RegisterService } from 'src/app/services/register.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPass:FormGroup;
  result:any;
  submitted:boolean=false
  constructor(private formBuilder:FormBuilder,private location:Location, private forgotPassService:ForgotPasswordService, private router:Router) {
    this.forgotPass = this.formBuilder.group({
      email: ['', Validators.required]  
   });
   }

  ngOnInit(): void {
   
  }
  get f() {
    return this.forgotPass.controls;
  }
  onSubmit(){
    this.submitted = true;
    // this.forgotPass.value;
    this.forgotPassService.forgotPass(this.forgotPass.value).subscribe((data) => {
        this.forgotPass.reset();
        // this.result=data;  
        this.location.back();    
        this.router.navigate(['/change-password']); 
       
      })
    }
}

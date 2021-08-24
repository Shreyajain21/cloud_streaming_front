import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import {
  FormGroup,
  FormsModule ,
  Validators,
  FormBuilder,
  FormArray,
} from "@angular/forms";
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  styleUrls: ['./register.component.css'],
  templateUrl: './register.component.html'
  
})

export class RegisterComponent implements OnInit {
  UserDetails: FormGroup;
  // mobileNos:FormArray;
  submitted = false;
  private result:any;
  dateOfBirth:Date;
  constructor(private _service:RegisterService,public formBuilder:FormBuilder, private location: Location, public router:Router) { 
      this.dateOfBirth=new Date();
    this.UserDetails = this.formBuilder.group({     
      firstName: ['', [Validators.required,Validators.pattern("^([A-Z][a-z]*((\s[A-Za-z])?[a-z]*)*)$"), Validators.minLength(6),Validators.maxLength(12)]],
      lastName: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      gender:  ['', Validators.required],
      dateOfBirth:  ['', Validators.required], 
      // mobileNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      mobileNo: this.formBuilder.array([this.newNumber()]),
      email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      // password: ['', Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]
      password: ['', Validators.required]
    })
}

newNumber() : FormGroup{
  return this.formBuilder.group({
  countryCode: ['', Validators.required], 
  number: ['', Validators.required]
});
}

get mobileNumber(): FormArray {
  return this.UserDetails.get("mobileNo") as FormArray;
  } 

get f() {
  return this.UserDetails.controls;
}
  ngOnInit() {
  
   }
  onSubmit(){
    this.submitted = true;
    console.log(this.UserDetails.value);
    if(this.UserDetails.invalid)
    return;
    else{
    console.log("before");
      this._service.register(this.UserDetails.value).subscribe(res=>{
        console.log(res,"save");
        if(res){
          this.router.navigate(['/otp-verify']);
        }
      });
    }
    // this._service.register(this.UserDetails.value)
    //     .subscribe((posRes)=>{
    //         this.result = posRes;
    //         console.log("User Data",posRes);
    //         if(posRes.status=== "success"){
    //           console.log("Success");
    //           alert(posRes.message)
    //          this.location.back();
    //  
    //         }else{
    //           alert(posRes.message)
    //         }
        
    //     },(err:HttpErrorResponse)=>{
    //       if(err.error instanceof Error){
            
    //         console.log("Client Side Error !!!");
    //       }else{
    //         console.log("Server Side Error !!!");
    //       }
    //     })
}

}
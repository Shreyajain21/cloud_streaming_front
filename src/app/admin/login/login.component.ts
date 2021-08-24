import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  result:any;
  submitted = false;
  
  constructor( private formBuilder: FormBuilder,private loginService:LoginService,
    private route: ActivatedRoute,
    private router: Router) {
      this.loginForm = this.formBuilder.group({
        // email: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
        email: ['',[Validators.required]],
        password: ['', [Validators.required]]
     });
}
get f() {
  return this.loginForm.controls;
}
ngOnInit(): void {
    
  }
  submit(data:any){
    this.submitted = true;
    console.log(this.loginForm.value);
    this.loginService.signin(this.loginForm.value).subscribe((posRes)=>{
    console.log(posRes)
    this.router.navigate(['/register'])
    //     if(posRes === "success"){
    //       alert ('login sucessfull');
    //       this.authservice.storeUserdetail(posRes)
    //     }
    //     else{
    //         console.log("Login fail");
    //         alert("Login fail.. invalid Username or Password")
    //     }
    // },(errRes:HttpErrorResponse)=>{
    //     console.log(errRes);
    });
  }
}

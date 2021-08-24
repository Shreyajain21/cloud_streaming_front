import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  cardsDetailForm:FormGroup;
  submitted:boolean=false
  constructor(private formBuilder:FormBuilder, private modalService:NgbModal, private billingService:BillingService, private router:Router) {
    this.cardsDetailForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      cardExpDate: ['', Validators.required],
      cardCvc:  ['', Validators.required],
      cardHolderName: ['', Validators.required],
    });
  }
  get f() {
    return this.cardsDetailForm.controls;
  }
  ngOnInit(): void {
  }
  openCardDetails(updateCardDetails:any){
    this.modalService.open(updateCardDetails, 
      { windowClass: 'light-modal', size: 'lg'}).result.then((result) => {          
    });  
  }
  onSaveCards(){
    if(this.cardsDetailForm.invalid)
    return;
    else{
    console.log("before");
      this.billingService.adddingCard(this.cardsDetailForm.value).subscribe(res=>{
        console.log(res,"Cardsave");
        if(res){
          this.router.navigate(['/']);
        }
      }); 
  }
}
}
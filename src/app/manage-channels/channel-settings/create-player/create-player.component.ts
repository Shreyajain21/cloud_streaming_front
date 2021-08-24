import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BillingService } from 'src/app/services/billing.service';
import { ChannelService } from 'src/app/services/channel.service';
import { ChannelSettingsService } from 'src/app/services/manageChannel/channel-settings.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {
  createPlayerDetailsForm:FormGroup;
  submitted:boolean=false;
  constructor(private formBuilder:FormBuilder, private modalService:NgbModal,private channelService:ChannelSettingsService, 
    private router:Router, private route:ActivatedRoute
    )
     { 
    this.createPlayerDetailsForm = this.formBuilder.group({     
      playerList : ['', [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      playerName : ['', Validators.required],
     
    });
    // this.header.title='Edit Channel';
  // this.header.add_Channel=true';
  // this.header.selectChannel=;
    
  }
  get f() {
    return this.createPlayerDetailsForm.controls;
  }
  // openinfo(add:any){
  //       this.modalService.open(add, 
  //         { windowClass: 'light-modal', size: 'lg'}).result.then((result) => {          
  //       });  
  //   }
  // onChangePlayerCount(event:any){
  //   // this.expand=true;
  // }
  openPlayerList(){

  }
  deletePlayerlist(){
  
  }
  ngOnInit(): void {
  }
  OnCreatePlayer(){
    if(this.createPlayerDetailsForm.invalid)
    return;
    else{ 
    this.channelService.createPlayer(this.createPlayerDetailsForm.value).subscribe(res=>{
      console.log(res,"createplater");
      if(res){
        this.router.navigate(['/']);
      }
    }); 
  }
}
}
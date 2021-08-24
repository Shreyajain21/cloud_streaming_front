import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-edit-channel',
  templateUrl: './edit-channel.component.html',
  styleUrls: ['./edit-channel.component.css']
})

export class EditChannelComponent implements OnInit {
  checked:boolean=false;
  secure:any=false;
  playerCount:any=false
  channelDetailsForm:FormGroup;
  isChannelType: boolean = true;
  submitted = false;
  channelId:any;
  send:any;
  header = {
    title:"Edit Channel",
    selectChannel:true,
    pushDest:false,
    add_Channel:""
  }
  constructor(private formBuilder:FormBuilder, private modalService:NgbModal,private channelService:ChannelService, 
    private router:Router, private route:ActivatedRoute,
    )
     { 
    this.channelDetailsForm = this.formBuilder.group({     
      pullSource: ['', Validators.required],
      channelName: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
       password: ['', Validators.required],
      securePlay:  ['', Validators.required], 
      playerCountDown: ['', Validators.required]
    });

  }
  get f() {
    return this.channelDetailsForm.controls;
  }
  openinfo(add:any){
        this.modalService.open(add, 
          { windowClass: 'light-modal', size: 'lg'}).result.then((result) => {          
        });  
    }
  onChangePlayerCount(event:any){
    // this.expand=true;
  }
  ngOnInit(): void {
  }
  OnUpdateChannel(){
this.submitted=true;
// this.channelId=this.route.snapshot.params.id;
// if(this.channelId){
// this.channelService.editChannel(this.channelId).subscribe(res=>{
//   // console.log(res,"save");
//   if(res){
//     this.channelDetailsForm.patchValue(res);
//   }
// }); 
//   }
// this.channelService.editChannel(id,this.channelDetails.value).subscribe(res=>{
//   if(res){
//     // this.channelDetails=res;
//   }
// })
// 
}

  deletePullSource(){
    
  }
  onAddPullSource(){

  }
  OnDeleteChannel(id:any){
    this.channelService.deleteChannel(id).subscribe(res=>{
      console.log(res,"deleteRes");
      if(res){
        // this.;
      }
    }); 
  }
}

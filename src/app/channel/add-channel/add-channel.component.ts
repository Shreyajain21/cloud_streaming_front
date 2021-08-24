import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.css']
})
export class AddChannelComponent implements OnInit {
  channelDetailsForm:FormGroup;
  submitted = false;
  checked: boolean=false;
  secure:any=false;
  playerCountDown:any=false
  expand:boolean=false;
  // fileToUpload: File
  isChannelType: boolean = true;
  uploadPhoto='Upload Logo'
  constructor(private formBuilder:FormBuilder,private router:Router,private _service:ChannelService) { 
    this.channelDetailsForm = this.formBuilder.group({     
      channelName: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      channelLogo: ['', Validators.required],
      channelType:  ['', Validators.required],
      streamName: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      password: ['', Validators.required],
      securePlay:  [this.secure, Validators.required], 
      playerCountDown: [this.playerCountDown, Validators.required]   
    })
  }
  get f() {
    return this.channelDetailsForm.controls;
  }
  ngOnInit(): void {
  }
  onChange() {
    // this.file = event.target.files[0];
}
onUpload(){

}
  uploadFile(event:any){
const file=event.target.files[0];
console.log(file);
this.uploadPhoto=file.name;
// this.channelDetailsForm.patchValue({
//   channelLogo:file
// });
// this.channelDetailsForm.get('channelLogo')?.updateValueAndValidity
  }
  addChannel(){
    this.submitted = true;
    const val = this.isChannelType ? 'LINNER' : 'on-demand';
    this.channelDetailsForm.get('channelType')?.patchValue(val); 
    console.log(this.channelDetailsForm.value);
    if(this.channelDetailsForm.invalid)
    return;
    else{
    console.log("before");
      this._service.adddingChannel(this.channelDetailsForm.value).subscribe(res=>{
        console.log(res,"save");
        if(res){
          this.router.navigate(['/channel/getChannelList']);
        }
      }); 
  }  
}}

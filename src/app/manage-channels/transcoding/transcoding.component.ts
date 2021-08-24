import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transcoding',
  templateUrl: './transcoding.component.html',
  styleUrls: ['./transcoding.component.css']
})
export class TranscodingComponent implements OnInit {
  TranscodingDetailsForm:FormGroup;
  submitted:boolean=false
  codeSource:boolean=false;
  TransStatus:boolean=false;
  sourceName:boolean=false;
  sourceBandwith:boolean=false;
  header = {
    title:"Transcoding",
    selectChannel:true,
    pushDest:false,
    add_Channel:""
  }
  constructor(private formBuilder:FormBuilder, private modalService:NgbModal) {
    this.TranscodingDetailsForm = this.formBuilder.group({
      channelName: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      channelLogo: ['', Validators.required],
      // channelType:  ['', Validators.required],
      streamName: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      password: ['', Validators.required],

    });
  }
  get f() {
    return this.TranscodingDetailsForm.controls;
  }
  copyInputMessage(){
    
  }
  copyText(inputElement:any){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
  openinfo(addPreset:any){
    this.modalService.open(addPreset, 
      { windowClass: 'light-modal', size: 'lg'}).result.then((result) => {          
    });  
}
openModel(updatePreset:any){
  this.modalService.open(updatePreset, 
    { windowClass: 'light-modal', size: 'lg'}).result.then((result) => {          
  });  
}
deletePreset(){

}
  ngOnInit(): void {
  }
  onTranscoding(){

  }
  onUpdatePreset(){
    
  }
  onSavePreset(){
    
  }
}

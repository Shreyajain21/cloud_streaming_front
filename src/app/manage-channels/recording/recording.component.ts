import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.css']
})
export class RecordingComponent implements OnInit {
  recordingName: any = 'FLV_RECORDING';
  header = {
    title:"Recording",
    selectChannel:true,
    pushDest:false,
    add_Channel:""
  }
  constructor() { 
   
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-bitrate',
  templateUrl: './multi-bitrate.component.html',
  styleUrls: ['./multi-bitrate.component.css']
})
export class MultiBitrateComponent implements OnInit {
  secure:any;
  send:any;
  constructor() {
    this.send='Multi Bitrate'
   }

  ngOnInit(): void {
  
  }
  onBitrate(){

  }
}

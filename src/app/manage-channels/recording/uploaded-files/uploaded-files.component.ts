import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploaded-files',
  templateUrl: './uploaded-files.component.html',
  styleUrls: ['./uploaded-files.component.css']
})
export class UploadedFilesComponent implements OnInit {
  onvalid : any = false;
  
 
  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    this.onvalid = true;
  
  }

}

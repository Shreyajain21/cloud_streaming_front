import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  destination:boolean=false;
  constructor(private modalService:NgbModal) { }
  onPushDestination(){}
  ngOnInit(): void {
  }
  openDeleteDest(removeDest:any){
    this.modalService.open(removeDest, 
      { windowClass: 'light-modal', size: 'lg'}).result.then((result) => {          
    }); 
  }
  onRemoveDest(){

  }
}

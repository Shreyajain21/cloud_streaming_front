import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-channel-dashboard',
  templateUrl: './channel-dashboard.component.html',
  styleUrls: ['./channel-dashboard.component.css']
})
export class ChannelDashboardComponent implements OnInit {

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }
  openModel(embededCode:any){
    this.modalService.open(embededCode, 
      { windowClass: 'light-modal', size: 'lg'}).result.then((result) => {          
    }); 
  }
}

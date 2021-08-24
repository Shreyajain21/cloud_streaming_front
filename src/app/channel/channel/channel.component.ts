import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  constructor(private modalService:NgbModal, private router:Router) { }

  ngOnInit(): void {
  }

  missagIocn:any = "assets/ms.png"
  icons:string = "icons";

  openChat(chat:any)
  {
    if(this.icons == "icons")
    {
      this.icons = "icons",
      this.missagIocn = "assets/cross.png"
    }
    else{
      this.missagIocn = "assets/ms.png",
      this.icons = "icons"
    }
    this.modalService.open(chat, 
            {}).result.then((result) => {          
          }); 
  }
  
  
}

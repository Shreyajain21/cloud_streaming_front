import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-storage',
  templateUrl: './video-storage.component.html',
  styleUrls: ['./video-storage.component.css']
})
export class VideoStorageComponent implements OnInit {
  expands:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}

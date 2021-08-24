import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoStorageService } from 'src/app/services/video-storage.service';

@Component({
  selector: 'app-upload-videos',
  templateUrl: './upload-videos.component.html',
  styleUrls: ['./upload-videos.component.css']
})
export class UploadVideosComponent implements OnInit {
  uploadImageDetailsForm:FormGroup
  uploadPhoto:any;
  constructor(private fb:FormBuilder, private videoStorage:VideoStorageService, private router:Router) {
    this.uploadImageDetailsForm = this.fb.group({
      image: ['']
    });
    // this.productId = this.route.snapshot.params.id;
    
   }

  ngOnInit(): void {
  }
  uploadFile(event:any){
    const file=event.target.files[0];
console.log(file);
this.uploadPhoto=file.name;
this.videoStorage.addImage(this.uploadImageDetailsForm.value).subscribe(res=>{
  // console.log(res,"save");
  if(res){
    this.router.navigate(['/']);
  }
}); 
  }
  onFileChange(event:any){

  }
  createVideo(){

  }
}

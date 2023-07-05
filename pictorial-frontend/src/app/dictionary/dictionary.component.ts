import { Component, OnInit } from '@angular/core';
import { ImageService } from '../service/image.service';
import { Image } from '../model/image';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  retrieveResonse: any;
  base64Data: any;
  retrievedImage: any;
  image:Image=new Image();
  constructor(private imageService:ImageService,private router:Router) { }

  ngOnInit(): void {
  }


  getImage() {
    this.imageService.getImage(this.image.fileName).subscribe(data => {
          this.retrieveResonse = data;
          this.image=data;
         
          this.base64Data = this.retrieveResonse.picByte;
          this.image.image = 'data:image/jpeg;base64,' + this.base64Data;
          console.log(this.image);
        },error=>alert("Image not found")
      );
  }


}

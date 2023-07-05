import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageSuggestions } from '../model/image-suggestions';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-image-suggestions',
  templateUrl: './image-suggestions.component.html',
  styleUrls: ['./image-suggestions.component.css']
})
export class ImageSuggestionsComponent implements OnInit {
  imagesuggestions: ImageSuggestions[] | undefined;
  imagesuggestion:ImageSuggestions=new ImageSuggestions();
  constructor(private imageService:ImageService,private router:Router) { }

  ngOnInit(): void {
    this.getSuggestionsofImage();
  }

  suggest(){
    this.imageService.suggestImage(this.imagesuggestion).subscribe(data=>{
      this.imagesuggestion=data;
      console.log(this.imagesuggestion);
    },error=>alert("Suggestion already exists"));
  }

  getSuggestionsofImage(){
    this.imageService.getSuggestions().subscribe(data=>{
      this.imagesuggestions=data;
      console.log(this.imagesuggestions);
    },error=>alert("no suggestions"));
  }
}

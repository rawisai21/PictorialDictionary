import { Component, OnInit } from '@angular/core';
import { ImageSuggestions } from '../model/image-suggestions';
import { ImageService } from '../service/image.service';
@Component({
  selector: 'app-give-suggestions',
  templateUrl: './give-suggestions.component.html',
  styleUrls: ['./give-suggestions.component.css']
})
export class GiveSuggestionsComponent implements OnInit {
  imagesuggestion:ImageSuggestions=new ImageSuggestions();
  constructor(private imageService:ImageService) { }

  ngOnInit(): void {
  }

  
  suggest(){
    this.imageService.suggestImage(this.imagesuggestion).subscribe(data=>{
      this.imagesuggestion=data;
      alert("suggested succesfully");
    },error=>alert("Suggestion already exists"));
  }

}

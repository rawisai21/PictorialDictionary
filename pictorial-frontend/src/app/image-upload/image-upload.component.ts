import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from '../model/image';
import { FormBuilder,FormControl,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { ImageService } from '../service/image.service';
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  public reactiveForm:any=FormGroup;
  public userFile:any=File;
  
  constructor(private imageService:ImageService,private router:Router,private fb:FormBuilder) {
this.reactiveForm=this.fb.group({
  fileName:new FormControl('',[Validators.required]),
  description:new FormControl('',Validators.required),
  addInfo:new FormControl('',Validators.required)

});

   }
  ngOnInit(): void {

  }

  onSelectFile(event:any){
    const file=event.target.files[0];
    console.log(file);
    this.userFile=file;

  }

  saveForm(submitForm:FormGroup){
    if(submitForm.valid){
      const user=submitForm.value;
      const formData=new FormData();
      formData.append('user',JSON.stringify(user));
      formData.append('file',this.userFile);
      this.imageService.saveImage(formData).subscribe((response)=>{
        console.log(response);
        alert("image uploaded successfulluy")
      });
    }
    else{
      this.validateFormFields(submitForm);
    }
  }

  validateFormFields(submitForm:FormGroup){
    Object.keys(submitForm.controls).forEach(field=>{
      const control=submitForm.get(field);
      if(control instanceof FormControl){
        control.markAsTouched({onlySelf:true});
      }else if(control instanceof FormGroup){
        this.validateFormFields(control);
      }
    })
  }

  }



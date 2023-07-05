import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../model/image';
import { ImageSuggestions } from '../model/image-suggestions';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseURL = "http://localhost:8081/image/upload/";
  private baseURL1 = "http://localhost:8081/image/dictionary";
  private baseURL2 = "http://localhost:8081/image-suggestions/";
  constructor(private httpClient: HttpClient) { }

  saveImage(formData:FormData):Observable<any>{
    console.log(formData)
    return this.httpClient.post(`${this.baseURL}`,formData);
  }

  getImage(fileName:string):Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL1}/${fileName}`);
  }

  suggestImage(suggestion:ImageSuggestions):Observable<any>{
    return this.httpClient.post(`${this.baseURL2}`,suggestion);
  }

  getSuggestions():Observable<ImageSuggestions[]>{
    return this.httpClient.get<ImageSuggestions[]>(`${this.baseURL2}`);
  }
}

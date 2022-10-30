import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http:HttpClient) { }

  getImages(){
    return this.http.get(`${environment.baseURL}/estamps/GetAllEstamp`);
  }

  delete(product: any){
    return this.http.delete(`${environment.baseURL}/estamps/DeleteEstamp/${product._id}`);
  }

  postImages(product: any){
    return this.http.post(`${environment.baseURL}/estamps/createEstamp`, product);
  }

  
}

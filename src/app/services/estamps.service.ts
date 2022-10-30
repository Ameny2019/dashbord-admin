import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstampsService {

  constructor(private http:HttpClient) { }

  getEstamps(){
    return this.http.get(`${environment.baseURL}/estamps/GetAllEstamp`);
  }

  deleteEstamps(id: any){
    return this.http.delete(`${environment.baseURL}/estamps/DeleteEstamp/${id}`);
  }

  postEstamps(product: any){
    return this.http.post(`${environment.baseURL}/estamps/createEstamp`, product);
  }

  getEstampById(id:any){
    return this.http.get(`${environment.baseURL}/estamps/GetEstampByID/${id}`)
  }

  updateEstamp(efleure:any,id:any){
    return this.http.put(`${environment.baseURL}/estamps/UpdateEstamp/${id}`,efleure)
  }

  updateEtatEstamp(id:any){
    return this.http.get(`${environment.baseURL}/estamps/updateEtat/${id}`);
  }

  getEstampsOui(){
    return this.http.get(`${environment.baseURL}/estamps/getOuiEtatProductEstamp`)
  }

  getEstampsNon(){
    return this.http.get(`${environment.baseURL}/estamps/getNonEtatProductEstamp`)
  }
}

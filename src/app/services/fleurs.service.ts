import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FleursService {

  constructor(private http: HttpClient) { }

    getfleurs(){
      return this.http.get(`${environment.baseURL}/efleur/GetAllEfleur/`)
    }

    getFleurById(id:any){
      return this.http.get(`${environment.baseURL}/efleur/GetEfleurByID/${id}`)
    }

    postEfleur(efleure:any){
      return this.http.post(`${environment.baseURL}/efleur/createEfleur`,efleure)
    }

    updateEfleur(efleure:any,id:any){
      return this.http.put(`${environment.baseURL}/efleur/UpdateEfleur/${id}`,efleure)
    }

    deleteEfleur(id: any){
      return this.http.delete(`${environment.baseURL}/efleur/DeleteEfleur/${id}`);
    }
    updateEtatEfleur(id:any){
      return this.http.get(`${environment.baseURL}/efleur/updateEtat/${id}`);
    }
    getEfleursOui(){
      return this.http.get(`${environment.baseURL}/efleur/getOuiEtatProductEfleur`)
    }
  
    getEfleursNon(){
      return this.http.get(`${environment.baseURL}/efleur/getNonEtatProductEfleur`)
    }

  

}



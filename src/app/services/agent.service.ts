import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http:HttpClient) { }

  postAgent(agent : any){
    return this.http.post(`${environment.baseURL}/user/CreateUser`,agent)
  }
 

  getAgent(){
    return this.http.get(`${environment.baseURL}/user/GetallUsers`)
  }
 

  deleteAgent(id:any){
    return this.http.delete(`${environment.baseURL}/user/deleteUser/${id}`)
  }
}

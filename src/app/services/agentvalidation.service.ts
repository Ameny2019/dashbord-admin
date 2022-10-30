import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class agentvalidationService {

  constructor(private http:HttpClient) { }


  postAgentvalidation(agentvalidation : any){
    return this.http.post(`${environment.baseURL}/user/CreateUser`,agentvalidation)
  }
 

  getagentvalidation(){
    return this.http.get(`${environment.baseURL}/user/GetallUsers`)
  }
 

  deleteagentvalidation(id:any){
    return this.http.delete(`${environment.baseURL}/user/deleteUser/${id}`)
  }
}


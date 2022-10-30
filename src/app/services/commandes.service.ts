import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  constructor(private http:HttpClient) { }


  
getcommande(){
  return this.http.get(`${environment.baseURL}/listecommandes/getcommande`);
}

deletecommande(id: any){
  return this.http.delete(`${environment.baseURL}/listecommandes/deletecommande/${id}`);
}

postcommande(product: any){
  return this.http.post(`${environment.baseURL}/listecommandes/createcommande`, product);
}

getCommandeById(id:any){
  return this.http.get(`${environment.baseURL}/listecommandes/getCommandeById/${id}`)
}

// updateEstamp(efleure:any,id:any){
//   return this.http.put(`${environment.baseURL}/product/UpdateEstamp/${id}`,efleure)
// }



}

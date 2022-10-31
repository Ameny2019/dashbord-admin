import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http:HttpClient) { }

getproduct(){
  return this.http.get(`${environment.baseURL}/product/getProduct`);
}

deleteproduct(id: any){
  return this.http.delete(`${environment.baseURL}/product/deleteProduct/${id}`);
}

createProduct(productData: any, subProductId: any){
  return this.http.post(`${environment.baseURL}/product/createProduct/${subProductId}`, productData);
}

getProductById(id:any){
  return this.http.get(`${environment.baseURL}/product/getProductById/${id}`)
}

// updateEstamp(efleure:any,id:any){
//   return this.http.put(`${environment.baseURL}/product/UpdateEstamp/${id}`,efleure)
// }

}

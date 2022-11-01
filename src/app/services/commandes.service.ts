import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommandesService {
  // NOTE : vous n'avez pas de route ayent le préfixe 'listecommandes/..." dans le backend
  constructor(private http: HttpClient) { }

  getCommandes() {
    return this.http.get(`${environment.baseURL}/Cart/getCarts`);
  }

  deleteCommande(id: any) {
    return this.http.delete(`${environment.baseURL}/Cart/deleteCart/${id}`);
  }

  getCommandeDetails(id: any) {
    return this.http.get(`${environment.baseURL}/Cart/getCartById/${id}`)
  }

}

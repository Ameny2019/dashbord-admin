import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http:HttpClient) { }

  getClient() {
    return this.http.get("https://jsonplaceholder.typicode.com/comments?_limit=10")    
  }

getCategorie(){
  return this.http.get("https://jsonplaceholder.typicode.com/comments?_limit=5")
}


}

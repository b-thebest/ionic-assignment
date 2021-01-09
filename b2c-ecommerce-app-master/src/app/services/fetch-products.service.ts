import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchProductsService {
  url="http://localhost:3030/products";

  constructor(private http: HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get(this.url);
  }

  getProductDetails(id):Observable<any> {
    return this.http.get(this.url + "/" +id);
  }
}

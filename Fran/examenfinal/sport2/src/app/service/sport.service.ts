import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product, Products, Root} from "../common/sport";

@Injectable({
  providedIn: 'root'
})
export class SportService {
  private URI= 'https://api-recu-sport-shop.vercel.app/api/v1/sport-shop/get/paged-products?page=1'

  constructor(private http: HttpClient) {
  }
  all(): Observable<Root>{
    return this.http.get<Root>(this.URI+ 'get/products')
  }
  oneProduct(id: string): Observable<Root>{
    return  this.http.get<Root>(this.URI+'get/one-product/:id'+id);
  }
  delete(id: string): Observable<ApiResultDelete>{
    return this.http.delete<ApiResultDelete>(this.URI+'delete/:id'+id);
  }
  update(producto:Product): Observable<Product>{
    return this.http.patch<Product>(this.URI+'patch/update-product/:id' +producto._id,producto);
  }

}
interface ApiResultDelete{
  status: string;
}

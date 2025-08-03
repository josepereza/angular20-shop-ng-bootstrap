import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl="https://fakestoreapi.com/products"
  private http = inject(HttpClient);
  getProductsRs(){
    return httpResource<Product[] | undefined>(()=>`${this.apiUrl}`)
  }
}

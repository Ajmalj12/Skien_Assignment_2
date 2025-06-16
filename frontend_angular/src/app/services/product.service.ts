
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(filters: any): Observable<{ total: number; products: Product[] }> {
    let params = new HttpParams();
    for (let key in filters) {
      if (filters[key]) params = params.set(key, filters[key]);
    }
    return this.http.get<{ total: number; products: Product[] }>(this.apiUrl, { params });
  }
  
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}

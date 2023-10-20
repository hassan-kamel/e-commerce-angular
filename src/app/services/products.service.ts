import { Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { HttpClient } from '@angular/common/http';
import Product from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] | null = null;

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(`${API_URL}/product?limit=500`);
  }
}

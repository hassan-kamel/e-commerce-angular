import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories = new BehaviorSubject<Category[] | null>(null);
  categoriesObs$ = this.categories.asObservable();

  constructor(private httpClient: HttpClient) {}

  addNew(category: Category) {
    return this.httpClient.post(`${API_URL}/category`, category);
  }

  getAll() {
    this.httpClient.get(`${API_URL}/category`).subscribe({
      next: (response: any) => {
        const categories = response.data as Category[];
        this.categories.next(categories);
      },
      error: (error) => {},
    });
  }

  getSingle() {}

  update() {}

  delete() {}
}

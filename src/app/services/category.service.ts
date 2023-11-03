import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../constants';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories = new BehaviorSubject<Category[] | null>(null);
  categoriesObs$ = this.categories.asObservable();
  TOKEN: string | null = null;

  constructor(
    private httpClient: HttpClient,
    private auth: AuthenticationService
  ) {
    this.auth.tokenObs$.subscribe({
      next: (token) => (this.TOKEN = token),
    });
  }

  addNew(category: FormData) {
    const options = this.getOptions();
    return this.httpClient.post(`${API_URL}/category`, category, options);
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

  getSingle(id: string) {
    const options = this.getOptions();
    return this.httpClient.get(`${API_URL}/category/${id}`, options);
  }

  update(id: string, category: FormData) {
    const options = this.getOptions();
    return this.httpClient.put(`${API_URL}/category/${id}`, category, options);
  }

  delete(id: string) {
    const options = this.getOptions();
    return this.httpClient.delete(`${API_URL}/category/${id}`, options);
  }

  private getOptions() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.TOKEN}`,
    });

    return { headers, contentType: undefined };
  }
}

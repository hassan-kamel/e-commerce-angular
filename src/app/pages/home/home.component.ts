import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  categories: Category[] | undefined;

  constructor(private categoryService: CategoryService) {
    this.categoryService.getAll();
    this.categoryService.categoriesObs$.subscribe({
      next: (categories) => (categories ? (this.categories = categories) : ''),
    });
  }
}

import { Component } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  categories: Category[] | null = null;

  constructor(private categoryService: CategoryService) {
    this.categoryService.getAll();
    this.categoryService.categoriesObs$.subscribe({
      next: (categories) => {
        this.categories = categories;
        console.log('this.categories : ', this.categories);
      },
    });
  }
}

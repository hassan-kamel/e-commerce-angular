import { Component } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from '../../services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  categories: Category[] | null = null;
  loading: boolean = true;

  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {
    this.categoryService.getAll();
    this.categoryService.categoriesObs$.subscribe({
      next: (categories) => {
        this.categories = categories;
        console.log('this.categories : ', this.categories);
        this.loading = false;
      },
    });
  }

  deleteCategory(id: string) {
    this.categoryService.delete(id).subscribe({
      next: () => {
        this.toastr.success('Deleted Successfully');
        this.categoryService.getAll();
      },
    });
  }
}

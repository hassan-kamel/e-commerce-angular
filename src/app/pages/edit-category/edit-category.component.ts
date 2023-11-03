import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
})
export class EditCategoryComponent {
  loadingSubmit: boolean = false;
  loadingData: boolean = true;
  categoryID: string = '';
  selectedImage = new BehaviorSubject<File | undefined>(undefined);
  imageSrc: string | ArrayBuffer | null | undefined;
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {
    this.route.params.subscribe({
      next: (params) => {
        this.categoryID = params['id'];
        this.categoryService.getSingle(params['id']).subscribe({
          next: (cate) => {
            const category = (cate as { data: Category }).data;
            this.loadingData = false;
            this.categoryForm = new FormGroup({
              name: new FormControl(category.name, [
                Validators.required,
                Validators.minLength(3),
              ]),
            });
            this.imageSrc = category.image;
          },
        });
      },
    });

    this.selectedImage.subscribe({
      next: (imageFile) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageSrc = e.target?.result;
        };

        reader.readAsDataURL(imageFile!);
      },
    });
  }

  getSelectedImage(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    this.selectedImage.next(inputElement.files?.[0]);
  }

  handleSubmit() {
    if (this.categoryForm.valid) {
      this.loadingSubmit = true;
      const categoryFromData = new FormData();
      categoryFromData.append('name', this.categoryForm.controls['name'].value),
        this.selectedImage.value &&
          categoryFromData.append(
            'image',
            this.selectedImage.value,
            this.selectedImage.value.name
          );

      this.categoryService.update(this.categoryID, categoryFromData).subscribe({
        next: () => {
          this.loadingSubmit = false;
          this.toastr.success(' Updated Successfully');
        },
        error: (err) => {
          this.toastr.error(err.error.message, err.error.status);

          this.loadingSubmit = false;
          console.log(err);
        },
      });
    }
  }
}

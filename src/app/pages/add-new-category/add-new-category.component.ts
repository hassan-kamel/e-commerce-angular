import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../services/category.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
})
export class AddNewCategoryComponent {
  loading: boolean = false;
  categoryForm: FormGroup;
  selectedImage = new BehaviorSubject<File | undefined>(undefined);
  imageSrc: string | ArrayBuffer | null | undefined;

  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
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
    console.log('this.categoryForm: ', this.categoryForm);
    if (this.categoryForm.valid) {
      this.loading = true;
      const categoryFormData = new FormData();
      categoryFormData.append('name', this.categoryForm.controls['name'].value);
      this.selectedImage.value &&
        categoryFormData.append(
          'image',
          this.selectedImage.value,
          this.selectedImage.value.name
        );

      this.categoryService.addNew(categoryFormData).subscribe({
        next: (value) => {
          console.log(value);
          // const response = value as AuthFulFilled;
          //
          this.toastr.success(' Created Successfully');
          // this.toastr.success('And Logged in Successfully');
          // this.router.navigate(['/']);
          this.loading = false;
        },
        error: (err) => {
          console.log(err);

          this.toastr.error(err.error.message, err.error.status);

          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        },
      });
    }
  }
}

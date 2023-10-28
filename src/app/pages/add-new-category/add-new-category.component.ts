import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { CategoryForm } from 'src/app/interfaces/category';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.css'],
})
export class AddNewCategoryComponent {
  loading: boolean = false;
  categoryForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      image: new FormControl([null, []]),
    });
  }

  handleSubmit() {
    // if (this.categoryForm.valid) {
    //   this.loading = true;
    //   this.categoryService
    //     .addNew(this.categoryForm.value as CategoryForm)
    //     .subscribe({
    //       next: (value) => {
    //         console.log(value);
    //         const response = value as AuthFulFilled;
    //         this.categoryService.token.next(response.token);
    //         localStorage.setItem('token', response.token);
    //         this.categoryService.decodeToken();
    //         this.toastr.success('User Created Successfully');
    //         this.toastr.success('And Logged in Successfully');
    //         this.router.navigate(['/']);
    //         this.loading = false;
    //       },
    //       error: (err) => {
    //         console.log(err.error.errors);
    //         err.error.errors.map((myErr: any) =>
    //           this.toastr.error(myErr.value, myErr.path)
    //         );
    //         this.loading = false;
    //       },
    //       complete: () => {
    //         this.loading = false;
    //       },
    //     });
    // }
  }
}

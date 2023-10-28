export interface Category {
  createdAt?: string;
  image?: string;
  name: string;
  slug?: string;
  updatedAt?: string;
  _id?: string;
}

export interface CategoryForm {
  name: string;
  image?: string;
}

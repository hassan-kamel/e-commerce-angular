interface Category {
  name: string;
}

interface Product {
  _id: string;
  title: string;
  slug: string;
  imageCover: string;
  description: string;
  quantity: number;
  sold: number;
  price: number;
  priceAfterDiscount: number;
  colors: string[];
  category: Category;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export default Product;

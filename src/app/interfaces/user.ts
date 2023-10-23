export interface User {
  name: string;
  email: string;
  password: string;
  passwordChangedAt?: string;
  slug?: string;
  avatar?: string;
  phone?: string;
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt: string;
  _id: string;
}
export interface SignUpForm {
  name: string;
  email: string;
  password: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface AuthFulFilled {
  token: string;
  userID: string;
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FeatureComponent } from './components/feature/feature.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchComponent } from './components/search/search.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';

//
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//
import { CarouselModule } from 'ngx-owl-carousel-o';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: 'dashboard', component: AdminDashboardComponent },
      // { path: 'profile', component: AdminProfileComponent },
    ],
  },
  { path: '**', component: NotFoundComponent }, // Wildcard route for 404
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    NavbarComponent,
    CarouselComponent,
    FeatureComponent,
    FooterComponent,
    FilterComponent,
    SearchComponent,
    ProductCardComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    RouterModule.forRoot(routes),
    CarouselModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

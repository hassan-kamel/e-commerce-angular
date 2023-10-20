import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  slides = [
    {
      id: '1',
      img: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?lazy=load&auto=compress&w=1920&h=900',
    },
    {
      id: '2',
      img: 'https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?lazy=load&auto=compress&w=1920&h=900',
    },
    {
      id: '3',
      img: 'https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?lazy=load&auto=compress&w=1920&h=900',
    },
    {
      id: '4',
      img: 'https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg?lazy=load&auto=compress&w=1920&h=900',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: [
      '<div class="absolute top-1/2 left-5 bg-indigo-300 inline-flex justify-center rounded-md border border-transparent bg-grape-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2"> Prev </div>',
      '<div class="absolute top-1/2 right-5 bg-orange-300 inline-flex justify-center rounded-md border border-transparent bg-grape-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2"> next </div>',
    ],
    items: 1,
    nav: true,
    autoplay: true,
  };
}

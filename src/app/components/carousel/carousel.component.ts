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
      img: 'https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg',
      title: 'New arrivals are here',
      description:
        "The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.",
      button: 'Shop New Arrivals',
    },
    {
      id: '2',
      img: 'https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg',
      title: 'Long-term thinking',
      description:
        "We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows us to focus on quality and reduce our impact. We're doing our best to delay the inevitable heat-death of the universe.",
      button: 'Read our story',
    },
    {
      id: '3',
      img: 'https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg',
      title: 'Level up your desk',
      description:
        'Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup.',
      button: 'Shop Workspace',
    },
    {
      id: '4',
      img: 'https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg',
      title: 'Simple productivity',
      description:
        "Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles.",
      button: 'Shop Focus',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    items: 1,
    nav: false,
    autoplay: true,
  };
}

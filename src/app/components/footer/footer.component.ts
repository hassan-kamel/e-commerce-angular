import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  currentPath: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((path: any) => {
      this.currentPath = path?.routerEvent?.url;
    });
  }

  isLoginOrSignup(): boolean {
    return this.currentPath === '/signup' || this.currentPath === '/login';
  }
}

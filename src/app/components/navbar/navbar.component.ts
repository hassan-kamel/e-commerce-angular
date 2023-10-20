import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  searchValue: string | null = null;
  menuOpened: boolean = false;
  @Input() currentPath: string = '';

  constructor() {}

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  isLoginOrSignup(): boolean {
    return this.currentPath === '/signup' || this.currentPath === '/login';
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() currentPath: string = '';

  isLoginOrSignup(): boolean {
    return this.currentPath === '/signup' || this.currentPath === '/login';
  }
}
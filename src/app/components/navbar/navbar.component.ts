import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  type: string = localStorage.getItem('type') || '';

  constructor() {}

  public logout(): void {
    localStorage.clear();
    window.location.href = '/login';
  }
}

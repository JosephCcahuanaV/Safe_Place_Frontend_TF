import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('token');
    const type = localStorage.getItem('type');
    const id = localStorage.getItem('user_id');
    const username = localStorage.getItem('username');
    const currentRoute = route.url[0]?.path;

    if (token && type && id && username) {
      if (currentRoute === 'login' || currentRoute === 'registro') {
        this.router.navigate(['locales']);
      }
      return true;
    } else {
      if (currentRoute === 'login' || currentRoute === 'registro') {
        return true;
      } else {
        localStorage.clear();
        this.router.navigate(['login']);
        return false;
      }
    }
  }
}

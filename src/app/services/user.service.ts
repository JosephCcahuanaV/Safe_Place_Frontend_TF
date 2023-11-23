import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Token } from '../models/token';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  ruta_servidor = environment.api;
  recurso = 'users';

  constructor(private http: HttpClient) {}

  getUser(id: number) {
    return this.http.get<User>(
      this.ruta_servidor + '/' + this.recurso + '/' + id.toString()
    );
  }

  getUsers() {
    return this.http.get<User[]>(this.ruta_servidor + '/' + this.recurso);
  }

  addUser(user: User) {
    return this.http.post<User>(this.ruta_servidor + '/' + this.recurso, user);
  }

  login(user: User) {
    return this.http
      .post<Token>(this.ruta_servidor + '/' + this.recurso + '/login', user)
      .pipe(
        tap((res) => {
          localStorage.setItem('token', res.jwtToken);
          localStorage.setItem('type', res.type.toString());
          localStorage.setItem('user_id', res.id.toString());
        })
      );
  }

  getCurrentUserId(): number | null {
    let userId: string | null = localStorage.getItem('user_id');
    return userId != null ? parseInt(userId) : null;
  }

  getCurrentToken(): string | null {
    let token: string | null = localStorage.getItem('token');
    return token != null ? token : null;
  }

  logout() {
    localStorage.clear();
  }
}

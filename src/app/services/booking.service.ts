import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  ruta_servidor = environment.api;
  recurso = 'bookings';
  recurso2 = 'create';

  constructor(private http: HttpClient) {}

  addBooking(booking: Booking): Observable<any> {
    let username = localStorage.getItem('username');

    if (!username) {
      // Maneja el error o asigna un valor por defecto a 'username'
      console.error('Username is not available');
      // O devuelve un Observable que indica un error
    }

    // Construye la URL con el parámetro de consulta 'username'
    const url = `${this.ruta_servidor}/${this.recurso}/${
      this.recurso2
    }?username=${encodeURIComponent(username!)}`;

    // Realiza la solicitud POST enviando solo el cuerpo de la solicitud (objeto 'booking')
    return this.http.post<Booking>(url, booking);
  }

  getBooking() {
    return this.http.get<Booking[]>(
      this.ruta_servidor +
        '/' +
        this.recurso +
        '/' +
        localStorage.getItem('username')
    );
  }
}

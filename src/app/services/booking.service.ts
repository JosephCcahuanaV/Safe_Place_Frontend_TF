import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  ruta_servidor = "http://localhost:8080/api";
  recurso = "bookings"
  recurso2 = "create"

  constructor(private http:HttpClient) { }


  addBooking(booking: Booking) {
    return this.http.post<Booking>(this.ruta_servidor+"/"+this.recurso + "/" + this.recurso2, booking);
  }

}

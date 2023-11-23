import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../models/payment';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  ruta_servidor = environment.api;
  recurso = 'payments';
  recurso2 = 'create';

  constructor(private http: HttpClient) {}

  getPayments() {
    return this.http.get<Payment[]>(this.ruta_servidor + '/' + this.recurso);
  }

  createPayment(payment: Payment) {
    return this.http.post<Payment>(
      this.ruta_servidor + '/' + this.recurso + '/' + this.recurso2,
      payment
    );
  }

  deletePayment(id: number) {
    return this.http.delete<Payment>(
      this.ruta_servidor + '/' + this.recurso + '/delete/' + id.toString()
    );
  }
}

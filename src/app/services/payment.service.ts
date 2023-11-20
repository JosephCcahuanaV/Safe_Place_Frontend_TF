import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  ruta_servidor = "http://localhost:8080/api";
  recurso = "locals"
  recurso2 = "create"

  constructor(private http:HttpClient) { }

  getLocals() {
    return this.http.get<Payment[]>(this.ruta_servidor+"/"+this.recurso);
  }

  getLocal(id: number) {
    return this.http.get<Payment>(this.ruta_servidor+"/"+this.recurso+"/"+id.toString());
  }

  addLocal(payment: Payment) {
    return this.http.post<Payment>(this.ruta_servidor+"/"+this.recurso + "/" + this.recurso2, payment);
  }

  deleteLocal(id: number) {
    return this.http.delete<Payment>(this.ruta_servidor+"/"+this.recurso+"/delete/"+id.toString());
  }
}

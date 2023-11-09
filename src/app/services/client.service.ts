import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  ruta_servidor = "http://localhost:8080/api";
  recurso = "clients"
  recurso2 = "create"

  constructor(private http:HttpClient) { }

  getClients() {
    return this.http.get<Client[]>(this.ruta_servidor+"/"+this.recurso);
  }

  getClient(id: number) {
    return this.http.get<Client>(this.ruta_servidor+"/"+this.recurso+"/"+id.toString());
  }

  addClient(client: Client) {
    return this.http.post<Client>(this.ruta_servidor+"/"+this.recurso + "/" + this.recurso2, client);
  }

  updateClient(client: Client) {
    return this.http.put<Client>(this.ruta_servidor+"/"+this.recurso+"/"+client.id.toString(), client);
  }

  deleteClient(id: number) {
    return this.http.delete<Client>(this.ruta_servidor+"/"+this.recurso+"/"+id.toString());
  }

}

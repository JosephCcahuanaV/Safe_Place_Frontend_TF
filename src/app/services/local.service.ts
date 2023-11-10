import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Local } from '../models/local';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  ruta_servidor = "http://localhost:8080/api";
  recurso = "locals"
  recurso2 = "create"

  constructor(private http:HttpClient) { }

  getLocals() {
    return this.http.get<Local[]>(this.ruta_servidor+"/"+this.recurso);
  }

  getLocal(id: number) {
    return this.http.get<Local>(this.ruta_servidor+"/"+this.recurso+"/"+id.toString());
  }

  addLocal(local: Local) {
    return this.http.post<Local>(this.ruta_servidor+"/"+this.recurso + "/" + this.recurso2, local);
  }

  updateLocal(local: Local) {
    return this.http.put<Local>(this.ruta_servidor+"/"+this.recurso+"/"+local.id.toString(), local);
  }

  deleteLocal(id: number) {
    return this.http.delete<Local>(this.ruta_servidor+"/"+this.recurso+"/"+id.toString());
  }
}

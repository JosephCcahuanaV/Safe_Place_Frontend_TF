import { Injectable } from '@angular/core';
import { Renter } from '../models/renter';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RenterService {
  ruta_servidor="http://localhost:8080/api";
  recurso="renters"

  constructor(private http:HttpClient) { }

  getRenters(){
    return this.http.get<Renter[]>(this.ruta_servidor+"/"+this.recurso);
  }

  getRenter(id: number){
    return this.http.get<Renter>(this.ruta_servidor+"/"+this.recurso+"/"+id.toString());
  }

  addRenter(renter:Renter){
    return this.http.post<Renter>(this.ruta_servidor+"/"+this.recurso+"/create",renter);
  }

  deleteRenter(id:number){
    return this.http.delete<Renter>(this.ruta_servidor+"/"+this.recurso+"/delete/"+id.toString());
  }

  updateRenter(renter:Renter){
    return this.http.put<Renter>(this.ruta_servidor+"/"+this.recurso+"/update/"+renter.id.toString(),renter);
  }

}

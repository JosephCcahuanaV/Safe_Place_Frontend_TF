import { Component, OnInit } from '@angular/core';
import { LocalService } from '../services/local.service';
import { Local } from '../models/local';

@Component({
  selector: 'app-lista-locales',
  templateUrl: './lista-locales.component.html',
  styleUrls: ['./lista-locales.component.css']
})
export class ListaLocalesComponent implements OnInit{

  lista_locales : Local[] = []
  constructor(private localService:LocalService)
  {

  }
  ngOnInit(): void {
    this.getLocales();

  }


  getLocales()
  {
    this.localService.getLocals().subscribe({
      next: (data) => {
        this.lista_locales = data
    },
    error: (err) => {
      console.log(err);
    }
    });
  }

}

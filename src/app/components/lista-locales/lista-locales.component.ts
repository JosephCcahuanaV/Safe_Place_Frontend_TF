import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';
import { Local } from '../../models/local';
import { MatDialog } from '@angular/material/dialog';
import { PrecioxdiaComponent } from '../precioxdia/precioxdia.component';

@Component({
  selector: 'app-lista-locales',
  templateUrl: './lista-locales.component.html',
  styleUrls: ['./lista-locales.component.css'],
})
export class ListaLocalesComponent implements OnInit {
  lista_locales: Local[] = [];
  filtered_locales: Local[] = [];
  filterName: string = '';
  filterCapacity: number = 0;
  filterPrice: number = 0;
  filterUbication: string = '';
  activeFilter: string = '';

  constructor(private localService: LocalService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getLocales();
  }

  toggleFilter(filterType: string) {
    this.activeFilter = this.activeFilter === filterType ? '' : filterType; // Toggle del filtro activo
    this.resetInputFields();
  }

  resetInputFields() {
    // Resetea todos los campos de entrada cuando se cambia el filtro
    this.filterName = '';
    this.filterCapacity = 0;
    this.filterPrice = 0;
    this.filterUbication = '';
  }

  getLocales() {
    this.localService.getLocals().subscribe({
      next: (data) => {
        this.lista_locales = data;
        this.filtered_locales = [...this.lista_locales]; // Crea una copia del arreglo (no referencia)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  applyFilterByName() {
    this.filtered_locales = this.lista_locales.filter((local) =>
      local.name.toLowerCase().includes(this.filterName.toLowerCase())
    );
  }

  applyFilterByCapacity() {
    if (this.filterCapacity > 0) {
      this.filtered_locales = this.lista_locales.filter(
        (local) => local.capacity === this.filterCapacity
      );
    } else {
      this.filtered_locales = [...this.lista_locales];
    }
  }

  applyFilterByPrice() {
    if (this.filterPrice > 0) {
      this.filtered_locales = this.lista_locales.filter(
        (local) => local.price <= this.filterPrice
      );
    } else {
      this.filtered_locales = [...this.lista_locales];
    }
  }

  applyFilterByUbication() {
    this.filtered_locales = this.lista_locales.filter((local) =>
      local.ubication.toLowerCase().includes(this.filterUbication.toLowerCase())
    );
  }

  resetFilters() {
    this.toggleFilter('name');
    this.filtered_locales = [...this.lista_locales]; // Retorna la lista a su estado original
  }

  opendaymodal(price: number) {
    let dialogRef = this.dialog.open(PrecioxdiaComponent, {
      height: '400px',
      width: '600px',
      data: {
        price,
      },
    });
  }
}

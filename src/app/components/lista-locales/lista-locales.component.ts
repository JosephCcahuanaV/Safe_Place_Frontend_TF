import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';
import { Local } from '../../models/local';
import { MatDialog } from '@angular/material/dialog';
import { PrecioxdiaComponent } from '../precioxdia/precioxdia.component';

@Component({
  selector: 'app-lista-locales',
  templateUrl: './lista-locales.component.html',
  styleUrls: ['./lista-locales.component.css']
})
export class ListaLocalesComponent implements OnInit{

  lista_locales : Local[] = []
  constructor(private localService:LocalService , private dialog:MatDialog)
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

  opendaymodal(price : string)
  {
    let dialogRef = this.dialog.open(PrecioxdiaComponent, {
      height: '400px',
      width: '600px',
      data:{
        price
      }
    });
  }

}

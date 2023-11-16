import { Component, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Renter } from 'src/app/models/renter';
import { RenterService } from 'src/app/services/renter.service';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-lista-clients',
  templateUrl: './lista-clients.component.html',
  styleUrls: ['./lista-clients.component.css']
})
export class ListaClientsComponent {

  dsClients=new MatTableDataSource<Renter>();
  displayedColumns: string[]=["id","name","lastname","email","numberPhone","dni","actions"];

  @ViewChild('paginator')
  paginator!: MatPaginator;

  constructor(private clientService:ClientService, public dialog: MatDialog){}

  ngOnInit(){
    this.CargaClientes();
  }

  filterClientes(event:Event){
    let filtro=(event.target as HTMLInputElement). value;
    this.dsClients.filter=filtro;
  }

  deleteClient(id:number){

    
    let dialogRef= this.dialog.open(ConfirmDeleteComponent);

    dialogRef.afterClosed().subscribe(
      selectedOption =>{
        if(selectedOption==true){
          
          this.clientService.deleteClient(id).subscribe({
            next:(data)=>{
              this.CargaClientes();
            },
            error:(err)=>{
              console.log(err);
            }
          });

        }
      }
    );
  }

  CargaClientes():void{
    this.clientService.getClients().subscribe({
      next:(data:Renter[])=>{


        this.dsClients=new MatTableDataSource(data);

        this.dsClients.paginator=this.paginator;
      },

      error: (err)=>{
        console.log(err);
      }

  });
  }

}

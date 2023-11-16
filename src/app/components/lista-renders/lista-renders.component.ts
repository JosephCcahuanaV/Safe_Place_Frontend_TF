import { Component, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Renter } from 'src/app/models/renter';
import { RenterService } from 'src/app/services/renter.service';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-lista-renders',
  templateUrl: './lista-renders.component.html',
  styleUrls: ['./lista-renders.component.css']
})
export class ListaRendersComponent {

  dsRenters=new MatTableDataSource<Renter>();
  displayedColumns: string[]=["id","name","lastname","email","numberPhone","dni","ruc", "address", "nacionality","actions"];

  @ViewChild('paginator')
  paginator!: MatPaginator;

  constructor(private renterService:RenterService, public dialog: MatDialog){}

  ngOnInit(){
    this.CargaArrendadores();
  }

  filterArrendadores(event:Event){
    let filtro=(event.target as HTMLInputElement). value;
    this.dsRenters.filter=filtro;
  }

  deleteRenter(id:number){

    
    let dialogRef= this.dialog.open(ConfirmDeleteComponent);

    dialogRef.afterClosed().subscribe(
      selectedOption =>{
        if(selectedOption==true){
          
          this.renterService.deleteRenter(id).subscribe({
            next:(data)=>{
              this.CargaArrendadores();
            },
            error:(err)=>{
              console.log(err);
            }
          });

        }
      }
    );
  }

  CargaArrendadores():void{
    this.renterService.getRenters().subscribe({
      next:(data:Renter[])=>{


        this.dsRenters=new MatTableDataSource(data);

        this.dsRenters.paginator=this.paginator;
      },

      error: (err)=>{
        console.log(err);
      }

  });
  }

}

import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Local } from 'src/app/models/local';
import { LocalService } from 'src/app/services/local.service';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-lista-locales2',
  templateUrl: './lista-locales2.component.html',
  styleUrls: ['./lista-locales2.component.css']
})
export class ListaLocales2Component {


  dslocales=new MatTableDataSource<Local>();
  displayedColumns: string[]=["id","name","ubication","description","capacity", "price","actions"];

  @ViewChild('paginator')
  paginator!: MatPaginator;

  constructor(private localService:LocalService, public dialog: MatDialog){}

  ngOnInit(){
    this.CargaUsers();
  }

  CargaUsers():void{
    this.localService.getLocals().subscribe({
      next:(data:Local[])=>{


        this.dslocales=new MatTableDataSource(data);

        this.dslocales.paginator=this.paginator;
      },

      error: (err)=>{
        console.log(err);
      }

  });
  }

  deleteLocal(id:number){

    
    let dialogRef= this.dialog.open(ConfirmDeleteComponent);

    dialogRef.afterClosed().subscribe(
      selectedOption =>{
        if(selectedOption==true){
          
          this.localService.deleteLocal(id).subscribe({
            next:(data)=>{
              this.CargaUsers();
            },
            error:(err)=>{
              console.log(err);
            }
          });

        }
      }
    );
  }

}

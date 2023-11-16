import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {
  dsUsers=new MatTableDataSource<User>();
  displayedColumns: string[]=["id","userName","password"];

  @ViewChild('paginator')
  paginator!: MatPaginator;

  constructor(private userService:UserService, public dialog: MatDialog){}

  ngOnInit(){
    this.CargaUsers();
  }

  CargaUsers():void{
    this.userService.getUsers().subscribe({
      next:(data:User[])=>{


        this.dsUsers=new MatTableDataSource(data);

        this.dsUsers.paginator=this.paginator;
      },

      error: (err)=>{
        console.log(err);
      }

  });
  }



}

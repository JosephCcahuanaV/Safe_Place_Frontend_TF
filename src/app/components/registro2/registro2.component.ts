import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.component.html',
  styleUrls: ['./registro2.component.css']
})
export class Registro2Component {

  ClientForm!: FormGroup;
  id!:number;
  modoInsertar: boolean = true;

  constructor (private formBuilder: FormBuilder, private clientService: ClientService, private router: Router,
              private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) {}

  ngOnInit(){
    this.loadForm();
  }

  loadForm() {

    this.ClientForm = this.formBuilder.group(
      {
        id:[""],
        name:["", [Validators.required, Validators.maxLength(60), Validators.minLength(1)]],
        lastname:["", [Validators.required, Validators.maxLength(30), Validators.minLength(1)]],
        email:["", [Validators.required, Validators.maxLength(60), Validators.minLength(1)]],
        numberPhone:["", [Validators.required, Validators.maxLength(30), Validators.minLength(1)]],
        Dni:["", [Validators.required, Validators.maxLength(60), Validators.minLength(1)]],


      }
    );

    this.id = this.activatedRoute.snapshot.params["id"];
    if (this.id!=0 && this.id!=undefined) {
      this.modoInsertar = false;
      this.clientService.getClient(this.id).subscribe({
        next: (data:Client)=> {
          this.ClientForm.get("id")?.setValue(data.id);
          this.ClientForm.get("name")?.setValue(data.name);
          this.ClientForm.get("lastname")?.setValue(data.lastname);
          this.ClientForm.get("email")?.setValue(data.email);
          this.ClientForm.get("numberPhone")?.setValue(data.numberPhone);
          this.ClientForm.get("Dni")?.setValue(data.Dni);
        },
        error: (err) => {
          console.log(err);
        }
      })
    } else {
      this.id=0;
      this.modoInsertar = true;
    };

  }

  saveClient(){
    const empleado: Client = {
      id: parseInt(this.ClientForm.get("id")!.value),
      name: this.ClientForm.get("name")!.value,
      lastname: this.ClientForm.get("lastname")!.value,
      email: this.ClientForm.get("email")!.value,
      numberPhone: this.ClientForm.get("numberPhone")!.value,
      Dni: this.ClientForm.get("Dni")!.value,

    };

    if (this.modoInsertar) {
      this.clientService.addClient(empleado).subscribe({
        next: (data) => {
            this.router.navigate([""]);
            this.snackBar.open("El empleado se registró correctamente", "OK", {duration:2000});
        },
        error: (err) => {
          console.log(err);
          this.snackBar.open("Hubo un error en el registro del empleado", "OK", {duration:2000});
        }
      });
    } else {
      this.clientService.updateClient(empleado).subscribe({
        next: (data) => {
          this.router.navigate([""]);
          this.snackBar.open("El empleado se actualizó correctamente", "OK", {duration:2000});
      },
      error: (err) => {
        console.log(err);
        this.snackBar.open("Hubo un error en la actualización del empleado", "OK", {duration:2000});
      }
      });
    }
  }

  cancel() {
    this.router.navigate(["/home"]);
  }

}

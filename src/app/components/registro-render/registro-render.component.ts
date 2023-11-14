import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RenterService } from 'src/app/services/renter.service';
import { Renter } from 'src/app/models/renter';


@Component({
  selector: 'app-registro-render',
  templateUrl: './registro-render.component.html',
  styleUrls: ['./registro-render.component.css']
})
export class RegistroRenderComponent {

  RenderForm!: FormGroup;
  id!:number;
  modoInsertar: boolean = true;

  constructor (private formBuilder: FormBuilder, private renterService: RenterService, private router: Router,
              private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) {}

  ngOnInit(){
    this.loadForm();
  }

  loadForm() {

    this.RenderForm = this.formBuilder.group(
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
      this.renterService.getRenter(this.id).subscribe({
        next: (data:Renter)=> {
          this.RenderForm.get("id")?.setValue(data.id);
          this.RenderForm.get("name")?.setValue(data.name);
          this.RenderForm.get("lastname")?.setValue(data.lastname);
          this.RenderForm.get("email")?.setValue(data.email);
          this.RenderForm.get("numberPhone")?.setValue(data.numberPhone);
          this.RenderForm.get("Dni")?.setValue(data.Dni);
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
    const renter: Renter = {
      id: parseInt(this.RenderForm.get("id")!.value),
      name: this.RenderForm.get("name")!.value,
      lastname: this.RenderForm.get("lastname")!.value,
      email: this.RenderForm.get("email")!.value,
      numberPhone: this.RenderForm.get("numberPhone")!.value,
      Dni: this.RenderForm.get("Dni")!.value,

    };

    if (this.modoInsertar) {
      this.renterService.addRenter(renter).subscribe({
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
      this.renterService.updateRenter(renter).subscribe({
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

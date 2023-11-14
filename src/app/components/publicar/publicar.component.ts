import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Local } from 'src/app/models/local';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent {

  LocalForm!: FormGroup;
  id!:number;
  modoInsertar: boolean = true;

  constructor (private formBuilder: FormBuilder, private localService: LocalService, private router: Router,
              private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar ) {}

  ngOnInit(){
    this.loadForm();
  }

  loadForm() {

    this.LocalForm = this.formBuilder.group(
      {
        id:[""],
        name:["", [Validators.required, Validators.maxLength(60), Validators.minLength(1)]],
        ubication:["", [Validators.required, Validators.maxLength(30), Validators.minLength(1)]],
        description:["", [Validators.required, Validators.maxLength(60), Validators.minLength(1)]],
        capacity:["", [Validators.required, Validators.maxLength(30), Validators.minLength(1)]],
        price:["", [Validators.required, Validators.maxLength(60), Validators.minLength(1)]],
        image:["", [Validators.required, Validators.maxLength(100), Validators.minLength(1)]]
      }
    );

    this.id = this.activatedRoute.snapshot.params["id"];
    if (this.id!=0 && this.id!=undefined) {
      this.modoInsertar = false;
      this.localService.getLocal(this.id).subscribe({
        next: (data:Local)=> {
          this.LocalForm.get("id")?.setValue(data.id);
          this.LocalForm.get("name")?.setValue(data.name);
          this.LocalForm.get("ubication")?.setValue(data.ubication);
          this.LocalForm.get("description")?.setValue(data.description);
          this.LocalForm.get("capacity")?.setValue(data.capacity);
          this.LocalForm.get("price")?.setValue(data.price);
          this.LocalForm.get("image")?.setValue(data.image)
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

  saveLocal(){
    const empleado: Local = {
      id: parseInt(this.LocalForm.get("id")!.value),
      name: this.LocalForm.get("name")!.value,
      ubication: this.LocalForm.get("ubication")!.value,
      description: this.LocalForm.get("description")!.value,
      capacity: this.LocalForm.get("capacity")!.value,
      price: this.LocalForm.get("price")!.value,
      image:this.LocalForm.get("image")!.value

    };

    if (this.modoInsertar) {
      this.localService.addLocal(empleado).subscribe({
        next: (data) => {
          this.router.navigate(["/locales"]);
          this.snackBar.open("El Local se registró correctamente", "OK", {duration:2000});
        },
        error: (err) => {
          console.log(err);
          this.snackBar.open("Hubo un error en el registro del local", "OK", {duration:2000});
        }
      });
    } else {
      this.localService.updateLocal(empleado).subscribe({
        next: (data) => {
          this.router.navigate(["/locales"]);
          this.snackBar.open("El empleado se actualizó correctamente", "OK", {duration:2000});
      },
      error: (err) => {
        console.log(err);
        this.snackBar.open("Hubo un error en la actualización del Local", "OK", {duration:2000});
      }
      });
    }




  }

  cancel() {
    this.router.navigate(["/home"]);
  }

}

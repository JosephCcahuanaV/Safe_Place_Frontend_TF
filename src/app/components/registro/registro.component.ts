import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {


  registroForm!:FormGroup;
  hide:boolean=true;

  constructor(
    private formBuilder:FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.loadForm()
  }

  loadForm() {

    this.registroForm = this.formBuilder.group(
      {
        userName:["", [Validators.required, Validators.maxLength(20), Validators.minLength(4)]],
        password:["", [Validators.required, Validators.maxLength(20), Validators.minLength(4)]]
      }
    );
  }

  registerUser() {
    const user: User = {
      id: 0,
      username: this.registroForm.get("userName")!.value,
      password: this.registroForm.get("password")!.value,
      type: "ROLE_CLIENT"
    };

    this.userService.addUser(user).subscribe({
      next: (data) => {
        this.router.navigate([""]);
        this.snackBar.open("El usuario se registró correctamente", "OK", {duration:2000});
    },
    error: (err) => {
      console.log(err.error.message);
      this.snackBar.open("Hubo un error en el registro del usuario: "+err.error.message, "OK", {duration:2000});
    }
    });

  }
  cancel() {
    this.router.navigate([""]);
  }

}



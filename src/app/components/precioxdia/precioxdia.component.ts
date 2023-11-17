import { Component , Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';


@Component({
  selector: 'app-precioxdia',
  templateUrl: './precioxdia.component.html',
  styleUrls: ['./precioxdia.component.css']
})
export class PrecioxdiaComponent {
  Form!:FormGroup

  constructor (private formBuilder: FormBuilder , private bookingService : BookingService , private router: Router,
    private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar , @Inject(MAT_DIALOG_DATA) public data: {price: number})
  {
    this.Form = this.formBuilder.group ({
      price:[this.data.price , Validators.required] ,
      dateStart:["" , Validators.required] ,
      dateFinish:["" , Validators.required]
    })



  }

  saveBooking(){
      if(this.Form.valid){
      this.bookingService.addBooking(this.Form.value).subscribe({
        next: (data) => {
            //this.router.navigate([""]);
            this.snackBar.open("La Reserva se registró correctamente", "OK", {duration:2000});
        },
        error: (err) => {
          console.log(err);
          this.snackBar.open("Hubo un error en el registro la Reserva", "OK", {duration:2000});
        }
      });
    }

  }

}

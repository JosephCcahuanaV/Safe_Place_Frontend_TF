import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit { 
  id: number = 0;
  monto: number = 0;
  payment!: Payment;

  public constructor(private activateRouter:ActivatedRoute, private router: Router, private paymentService: PaymentService) {}

  ngOnInit() {
    this.activateRouter.queryParams.subscribe(data => {
      this.id = Number(data['id'])
      this.monto = Number(data['monto'])
      this.initializePayment();
    })
  }

  private initializePayment(): void {
    this.payment = {
      typePay: "Credito",
      NameonCard: "Juan Perez",
      FinalPrice: this.monto,
      ExpMonth: new Date("2021-10-10"),
      ExpYear: new Date("2021-10-10"),
      CardCvc: 123,
      FechaNacimiento: new Date("2021-10-10"),
      FullName: "Juan Perez",
      EmailAddress: "juan.perez@gmail.com",
      CardNumber: "1234567891234567",
      bookingId: this.id
    };
  }

  public createPayment() {
    // Hacer un formulario para que se habilite el boton que llama a createPayment() cuando completa todos los formularios
    // Hasta acá se supone que el usuario ya ha completado todos los inputs del HTML del payment

    if (!this.payment) {
      console.error('Payment object is not initialized.');
      return;
    }

    // Llama al service
    this.paymentService.createPayment(this.payment).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
    this.router.navigateByUrl('/pago');
  }
}

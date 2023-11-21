import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  monto:number = 0
  constructor(private router:ActivatedRoute)
  {
    this.router.queryParams.subscribe(data => {
      this.monto = Number(data['monto'])

    })
  }
}

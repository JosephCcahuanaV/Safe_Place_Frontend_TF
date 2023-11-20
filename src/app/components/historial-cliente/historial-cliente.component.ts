import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-historial-cliente',
  templateUrl: './historial-cliente.component.html',
  styleUrls: ['./historial-cliente.component.css']
})
export class HistorialClienteComponent {


  dsbooking=new MatTableDataSource<Booking>();
  displayedColumns: string[]=["id","price","dateStart","dateFinish","totalPrice"];

  @ViewChild('paginator')
  paginator!: MatPaginator;
  private datePipe: DatePipe = new DatePipe('en-US'); // Adjust locale as needed
  constructor(private BookingService:BookingService, public dialog: MatDialog){}

  ngOnInit(){
    this.CargaUsers();
  }

  CargaUsers():void{
    this.BookingService.getBooking().subscribe({
      next:(data:Booking[])=>{
        console.log();
        this.dates(data);
		this.calculateTotalPrices(data);
        this.dsbooking=new MatTableDataSource(data);
        this.dsbooking.paginator=this.paginator;
      },

      error: (err)=>{
        console.log(err);
      }

  });
  }
  dates(bookings: Booking[]): void {
    bookings.forEach(booking => {
      console.log(booking.dateStart)
      booking.dateStart = this.formatDate(booking.dateStart);
      booking.dateFinish = this.formatDate(booking.dateFinish);
    });
  }
  
  private formatDate(dateString: string): string {
    return this.datePipe.transform(dateString, 'dd/MM/yyyy') || '';
  }
  
  calculateTotalPrices(bookings: Booking[]): void {
    const igv: number = 0.18;
    bookings.forEach(booking => {
      const startDate = this.convertToDate(booking.dateStart);
      const endDate = this.convertToDate(booking.dateFinish);
      
      if (startDate && endDate) {
        const diffInTime = endDate.getTime() - startDate.getTime();
        const diffInDays = diffInTime / (1000 * 3600 * 24) + 1; // +1 para incluir el día de inicio
        const tpWithoutIGV = diffInDays * booking.price;
        const totalPrice = tpWithoutIGV + (tpWithoutIGV * igv);
        booking.totalPrice = totalPrice;
      }
    });
  }
  
  private convertToDate(dateString: string): Date | null {
    const [day, month, year] = dateString.split('/').map(Number);
    if (!day || !month || !year) {
      return null;
    }
    return new Date(year, month - 1, day); // -1 porque los meses en JavaScript son 0-indexados
  }
}
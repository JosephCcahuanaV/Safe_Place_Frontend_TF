import { Payment } from './payment';

export interface Booking {
  id: number;
  price: number;
  dateStart: string;
  dateFinish: string;
  totalPrice: number;
  payment?: Payment;

  isPayed: boolean;
}

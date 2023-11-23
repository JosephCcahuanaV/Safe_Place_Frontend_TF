export interface Payment {
  typePay : string
  NameonCard :string
  FinalPrice: number
  ExpMonth: Date
  ExpYear: Date
  CardCvc: number
  FechaNacimiento : Date
  FullName: string
  EmailAddress: string
  CardNumber:string
  
  bookingId: number;
}

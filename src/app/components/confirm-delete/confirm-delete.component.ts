import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent {
  constructor(private dialogRef: MatDialogRef<ConfirmDeleteComponent>){}

  cancel(){
    this.dialogRef.close(false);
  }

  confirm(){
    this.dialogRef.close(true);
  }
}

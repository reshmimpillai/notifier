import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AddCatergoryComponent} from './../add-catergory/add-catergory.component';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddCatergoryComponent>) { }

  ngOnInit() {
  }

  onOkClick(): void {
    this.dialogRef.close();
  }

}

import { Component, OnInit , Inject, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, DateAdapter} from '@angular/material';
import {DialogPopupComponent} from './../dialog-popup/dialog-popup.component';
import {ManageCategoryService} from './../manage-category.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { Category } from '../manage-category.service';
import {AppDateAdapter, APP_DATE_FORMATS} from './../util/AppDateAdapter';


@Component({
  selector: 'app-add-catergory',
  templateUrl: './add-catergory.component.html',
  styleUrls: ['./add-catergory.component.css']
})
export class AddCatergoryComponent implements OnInit {
  @ViewChild('f') form1: any;
  selectedIcon: string;
  mainCategories = ['Finance', 'Grocery','Service Providers'];
  subCategories = ['LIC', 'BESCOM','OTHERS'];
  subCategory: string;
  mainCategory:string;
  selectedCategory: string;
  modes = ['Yrly', 'Half Yrly', 'Qtrly', ' Montly'];
  constructor(public dialog: MatDialog, private service: ManageCategoryService,
    ) {
     // DD/MM/YYYY
  }

  ngOnInit() {
    this.service.selectedIcon.subscribe(
      (selectedIcon: string) => {
        this.selectedIcon = selectedIcon;
        console.log('selectedIndex' + ' ' + this.selectedIcon );
      }
    );

    // var dateObj = new Date('Thu Apr 12 2018 00:00:00 GMT+0530 (India Standard Time)');

    // console.log(dateObj);
    // var date2 = new Date();
    // console.log(date2);
    // if(dateObj.getTime == date2.getTime){
    //   console.log('true');
    // }
    // else
    //   console.log('flase');


  }

  onsubmit(form: NgForm) {
    let categorySelected='';
    const subCategory = form.value.subCategory;
   
    if(this.subCategory=='OTHERS'){
      categorySelected = form.value.otherCategory;
    }
    else{
      categorySelected = form.value.subCategory;
    } 
    const mode = form.value.mode;
    let due_date = form.value.date;
    console.log('typeOfdate' + typeof(due_date));

    
    this.service.storeCategoryDetails(this.mainCategory, subCategory, this.selectedIcon , mode, due_date);
    if(form.valid){

      const dialogRef = this.dialog.open(ConfirmationComponent, {
        width: '400px',
        data: {name: '', animal: ''}
      });

      form.reset();

    }




  }



  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPopupComponent, {
      width: '400px',
      data: {name: '', animal: ''}
    });
  }


}

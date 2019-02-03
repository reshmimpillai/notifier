import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AddCatergoryComponent} from './../add-catergory/add-catergory.component';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {ManageCategoryService} from './../manage-category.service';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css']
})
export class DialogPopupComponent implements OnInit {
  iconList = ['appt', 'lic1', 'lic2', 'lic3'];
  constructor(
    public dialogRef: MatDialogRef<AddCatergoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer, private service: ManageCategoryService) {
      iconRegistry.addSvgIcon(
        'appt',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo.svg')
      );
      iconRegistry.addSvgIcon(
        'lic1',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/lic_1.svg')
      );
      iconRegistry.addSvgIcon(
        'lic2',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/lic_2.svg')
      );
      iconRegistry.addSvgIcon(
        'lic3',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/lic3.svg')
      );
      iconRegistry.addSvgIcon(
        'lic3-md',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/lic3-md.svg')
      );

    }


    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {

  }

  onIconSelect(iconName) {

    this.service.selectedIcon.next(iconName);
    this.dialogRef.close();
  }

}

import {
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    DateAdapter,
    MAT_DATE_FORMATS
} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgModule} from '@angular/core';
import {AppDateAdapter, APP_DATE_FORMATS} from './util/AppDateAdapter';

@NgModule({

  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule,
    MatDialogModule, MatRadioModule, MatCardModule, MatDatepickerModule, MatNativeDateModule,
    MatBadgeModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatDialogModule, MatRadioModule, MatCardModule, MatDatepickerModule, MatNativeDateModule,
    MatBadgeModule],
    providers: [
      {
        provide: DateAdapter,
        useClass: AppDateAdapter
      },
      {
        provide: MAT_DATE_FORMATS,
        useValue: APP_DATE_FORMATS
      }
    ]

})
export class AppMaterialModule { }

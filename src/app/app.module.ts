import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app.material';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AddCatergoryComponent } from './add-catergory/add-catergory.component';
import { DialogPopupComponent } from './dialog-popup/dialog-popup.component';

import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import {DialogDataExampleDialogComponent} from './dialog-overview/dialog-overview.component';
import {ManageCategoryService} from './manage-category.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { MaterialElevationDirective } from './material-elevation.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddCatergoryComponent,
    DialogPopupComponent,
    DialogOverviewComponent,
    DialogDataExampleDialogComponent,
    ConfirmationComponent,
    DasboardComponent,
    MaterialElevationDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  entryComponents:[DialogDataExampleDialogComponent, DialogPopupComponent, ConfirmationComponent],
  providers: [ManageCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

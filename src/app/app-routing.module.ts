import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCatergoryComponent} from './add-catergory/add-catergory.component';
import {DialogOverviewComponent} from './dialog-overview/dialog-overview.component';
import {DasboardComponent} from './dasboard/dasboard.component';
const routes: Routes = [

  {path: 'category', component: AddCatergoryComponent},
  {path: 'dashboard', component: DasboardComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

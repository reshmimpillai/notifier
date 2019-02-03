import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

export interface Category {
  category: string;
  subcategory: string;
  selectedIconIndex: number;
  mode: string;
  dueDate: string;
  notify:boolean;
}

export class ManageCategoryService {

  selectedIcon = new Subject<any>();

  // private categoryData: any[] = [{
  //   catergory: '',
  //   subcategory: '',
  //   selectedIconIndex : ''
  // }];
   private categoryData: any[] = [
     {category:"Finance",
     subcategory:"LIC",
     dueDate:'Thu Jul 01 2021 00:00:00 GMT+0530 (India Standard Time)',
     mode: "Half Yrly",
     notify:true,
     selectedIcon :"lic3"
     },
     {category:"Finance",
     subcategory:"LIC",
     dueDate:'Thu Jul 02 2021 00:00:00 GMT+0530 (India Standard Time)',
     mode: "Half Yrly",
     notify:true,
     selectedIcon :"lic3"},
     {
      category:"Finance",
      subcategory:"LIC",
      dueDate:'Thu Jul 03 2021 00:00:00 GMT+0530 (India Standard Time)',
      mode: "Half Yrly",
      notify:true,
      selectedIcon :"lic3"
     }
   ];


  constructor() { }

  storeCategoryDetails(catergory: string, subcategory: string, selectedIcon: string, mode: string, dueDate: string){
    let obj = {
      category: catergory,
      subcategory: subcategory,
      selectedIcon: selectedIcon,
      mode: mode,
      dueDate:dueDate
    };
    this.categoryData.push(obj);

  }

  getCategoryDetails(){
    return this.categoryData;
  }



}

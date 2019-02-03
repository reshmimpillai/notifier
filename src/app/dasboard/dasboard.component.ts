import { Component, OnInit } from '@angular/core';
import {ManageCategoryService} from './../manage-category.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  icons: any[] = [];
  defaultElevation=2;
   myobj = [
    {mainCategory:'Finance',
     otherDetails:[{subCategory:'LIC',dueDate:'3/3/2019',selectedIcon:'lic3',premiums:[{name:'one'},{name:'two'}]}]
    },
     {mainCategory:'Finance',
     otherDetails:[{subCategory:'LIC',dueDate:'3/4/2019',selectedIcon:'lic3',premiums:[{name:'one'},{name:'two'}]}]
    }];

    myObj2=[
      {mainCategory:"Finance",
       otherDetails:[
         {subCategory:"LIC",dueDate:"3/3/19"},
         {subCategory:"LIC",dueDate:"4/4/19"}
        ]},

        {mainCategory:"Finance",
        otherDetails:[
          {subCategory:"LIC",dueDate:"3/3/19"},
          {subCategory:"LIC",dueDate:"4/4/19"}
         ]}, 
         
         {mainCategory:"Grocery",
         otherDetails:[
           {subCategory:"Pulses",dueDate:"3/3/19"},
           {subCategory:"Cereals",dueDate:"4/4/19"}
          ]},

       
    ];
    
    myObj3=[
      {category:[
        {
       mainCategory:"Finance",
       otherDetails:[
        {subCategory:"LIC",dueDate:"3/3/19"},
        {subCategory:"LIC",dueDate:"4/4/19"}
       ]
    }]},
    
    {category:[
      {
     mainCategory:"Grocery",
     otherDetails:[
      {subCategory:"LIC",dueDate:"7/3/19"},
      {subCategory:"LIC",dueDate:"4/4/19"}
     ]
  }]},
    
  ];
      


  myObj4=[
    {
      node:'root',
      children:[
        {
          node:'Finance',
          children:
          [
            {
            node:'LIC',
            details:{
              duedate:'5/5/1990'
            }
            
          },
          {
            node:'BSL',
            details:{
              duedate:'6/6/1990'
            }
            
          }
        ]

        }
    ]
    },

    {
      node:'root',
      children:[
        {
          node:'Grocery',
          children:
          [
            {
            node:'Pulses',
            details:{
              duedate:'5/5/1990'
            }
            
          },
          {
            node:'Juices',
            details:{
              duedate:'6/6/1990'
            }
            
          }
        ]

        }
    ]
    }
    
    
  ];
  
  constructor(private service: ManageCategoryService, private iconRegistry: MatIconRegistry,private sanitizer: DomSanitizer) {

   }

  ngOnInit() {
    // this.icons = this.service.getCategoryDetails();
    // //  console.log(this.icons.length);

    //  for(let i=0;i<this.icons.length;i++){
    //   //  console.log(this.icons[i].selectedIcon);
    //   var selectedDate = new Date(this.icons[i].dueDate);
     

    //   var currentDate = new Date();
    //  // console.log(date1);
    //  var date_part=currentDate.getDate();
    //  var month_part=currentDate.getMonth()+1;
    //  var year_part=currentDate.getFullYear();
    //  var currentDateString=date_part+'/'+month_part+'/'+year_part;
     
    //  var selectedDate_part=selectedDate.getDate();
    //  var selectedMonth_part=selectedDate.getMonth()+1;
    //  var selectedYear_part=selectedDate.getFullYear();
    //  var selectedDateString=selectedDate_part+'/'+selectedMonth_part+'/'+selectedYear_part;
  
    //  if((selectedDate_part<=date_part && selectedMonth_part<=month_part && selectedYear_part<=year_part)||
    //   (selectedYear_part>=year_part))
    //   {
   
    //      this.icons[i].notify=true;
  
    //   }
    // else{
     
    //   this.icons[i].notify=false;  
    // }

  // console.log(this.icons)
//}



  // this.icons= this.myobj;

  // console.log(this.myobj[0]);
  console.log(this.myObj3[0].category[0].mainCategory);
  console.log(this.myObj4);
    // for(let i=0;i<this.myObj3.length;i++){
    //   console.log(i);
    //   console.log(this.myObj3[i]);
    //    console.log(this.myObj3[i].category.length);
    //   for(let j=0;j<this.myObj3[i].category.length;i++){
    //     console.log(this.myObj3[i].category[j].mainCategory);
    //     console.log(i);
    //     console.log(j)
    //   }

    // }
  
  }

}

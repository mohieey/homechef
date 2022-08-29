import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-finalpay',
  templateUrl: './finalpay.component.html',
  styleUrls: ['./finalpay.component.css']
})
export class FinalpayComponent implements OnInit {

  constructor() { }
@ViewChild('main') body!:ElementRef
@ViewChild(' final') fin!:ElementRef

  number:any[]=[]
  newarr:any
  result:any

  imgarr:any[]=['./assets/img/arr1.jpg','./assets/img/arr2.jpg','./assets/img/arr3.jpg','./assets/img/arr4.jpg','./assets/img/arr5.jpg','./assets/img/arr6.jpg']
  tarr:any[]=['Swiss Chicken','Italian Sausage Penne','BBQ Shrimp Tacos','Puff Pastry-Wrapped Chicken','Garlic Pepper Chicken','Creamy Italian Sausage','Carne Asada Steak Torta']
  darr:any[]=['with shallot cream and white cheddar','with garlic aioli and fries','with mashed potatoes and beans','and herbed goat cheese','with green beans and apples','with smashed potatoes']
  
  img1:any
  img2:any
  img3:any
  img4:any

  t1:any
  t2:any
  t3:any
  t4:any

  d1:any
  d2:any
  d3:any
  d4:any
  
  
  ngOnInit(): void {
    this.finalPay()
    this.displayCard()
  }

finalPay(){
    this.number=JSON.parse(localStorage.getItem('dataUser')!)
    console.log(this.number);

    this.newarr=Object.values(JSON.parse(localStorage.getItem('User')!))
    console.log(this.newarr);

     this.result=JSON.parse(localStorage.getItem('resultPrice')!)

}

clearall(){
  this.body.nativeElement.style.display='none'
  this.fin.nativeElement.style.display='block'
}

displayCard(){
  this.img1 = this.imgarr[Math.floor(Math.random()*this.imgarr.length)];
  this.t1 = this.tarr[Math.floor(Math.random()*this.tarr.length)];
  this.d1 = this.darr[Math.floor(Math.random()*this.darr.length)];
  console.log(this.t1);

  this.img2 = this.imgarr[Math.floor(Math.random()*this.imgarr.length)];
  this.t2 = this.tarr[Math.floor(Math.random()*this.tarr.length)];
  this.d2 = this.darr[Math.floor(Math.random()*this.darr.length)];

  this.img3 = this.imgarr[Math.floor(Math.random()*this.imgarr.length)];
  this.t3 = this.tarr[Math.floor(Math.random()*this.tarr.length)];
  this.d3 = this.darr[Math.floor(Math.random()*this.darr.length)];

  this.img4 = this.imgarr[Math.floor(Math.random()*this.imgarr.length)];
  this.t4 = this.tarr[Math.floor(Math.random()*this.tarr.length)];
  this.d4 = this.darr[Math.floor(Math.random()*this.darr.length)];
}

}


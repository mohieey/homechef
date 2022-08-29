import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  form:any= FormGroup 
  extraSlides: Array<any> = [
    { name: 'BBQ', value: 34 },
    { name: 'Frise', value: 20 },
    { name: 'Spicy', value: 24 },
    { name: 'Chease', value: 42},
    { name: 'Rice', value: 66 }
  ];
  cart:any[]=[]
  total:number=0
  allPrice:number=0
  tax:number=50

  @ViewChild('dis') diss!:ElementRef
  @ViewChild('icon') iconn!:ElementRef
  @ViewChild('empty') emptymsg!:ElementRef
  @ViewChild('allcart') allcartt!:ElementRef

  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      selectedSlides:  new FormArray([])
     });
  }

  ngOnInit(): void {
    this.getData()
  }
 
  onCheckboxChange(event: any) {
    
    const selectedSlides = (this.form.controls['selectedSlides'] as FormArray);
    if (event.target.checked) {
      selectedSlides.push(new FormControl(event.target.value));
     this.totalCost()
    } else {
      const index = selectedSlides.controls
      .findIndex(x => x.value === event.target.value);
      selectedSlides.removeAt(index);
      this.totalCost()
    }
  }

  // submit() {
  //   console.log(this.form.value.selectedSlides);
  //   const mm= this.form.value.selectedSlides
  //   const output = mm.map(Number);
  //   var sum = output.reduce((acc: any, cur: any) => acc + cur, 0);
  //   console.log(sum);
    
  // }

  

  getData()
  {
   if('cart' in localStorage){
    this.cart=JSON.parse(localStorage.getItem('cart')!)
    this.totalCost()
   }
   else{
    this.allcartt.nativeElement.style.display='none'
   }
  }

  addOne(index:any)
  {
    this.cart[index].quantity++
    this.totalCost()
    this.diss.nativeElement.disabled=false
    this.iconn.nativeElement.style.display='none'
   localStorage.setItem('cart',JSON.stringify(this.cart))
  }

  removeOne(index:any)
  {
    if (this.cart[index].quantity>1) {
      this.cart[index].quantity--
      this.totalCost()
      this.diss.nativeElement.disabled=false
      this.iconn.nativeElement.style.display='none'
      localStorage.setItem('cart',JSON.stringify(this.cart))
    }
  }

  deleteAll()
  {
    this.cart=[]
    console.log(this.cart);
    this.totalCost()
    localStorage.setItem('cart',JSON.stringify(this.cart))
    this.allcartt.nativeElement.style.display='none'
    this.emptymsg.nativeElement.style.display='block'
  }

  totalCost()
  {
    const mm= this.form.value.selectedSlides
    const output = mm.map(Number);
    var sum = output.reduce((acc: any, cur: any) => acc + cur, 0);
    // console.log(sum);
    this.total=0
    this.allPrice=0
    for(const x in this.cart){
    var kol= this.total+=this.cart[x].item.price*this.cart[x].quantity
    this.allPrice=kol + sum + this.tax
    // console.log(this.allPrice)
    // console.log(this.tax);
    localStorage.setItem('allprice',JSON.stringify(this.allPrice))
   
    
    }
  }

  disabledBtn()
  {
    this.diss.nativeElement.disabled=true
    this.iconn.nativeElement.style.display='inline'
  }

 
}

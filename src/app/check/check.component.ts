import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  constructor(private fb:FormBuilder,private router: Router) { }

  @ViewChild('information') info!:ElementRef
  @ViewChild('checkout') check!:ElementRef
  @ViewChild('final') fin!:ElementRef
  subTotal:any=''


  registerationForm = this.fb.group({
   
    // lName: ['',[Validators.required]],
    // email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    // country: ['',[Validators.required]],    
    // city: ['',[Validators.required]],    
    // region: ['',[Validators.required]],
    // validation of check out by visa
    creditID: ['',[Validators.required]],
    creditName: ['',[Validators.required]],
    month: ['',[Validators.required]],
    year: ['',[Validators.required]],
    cvv: ['',[Validators.required]],
  })

  registerationForm1 = this.fb.group({
    fName: ['',[Validators.required]],
    number: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{11}$")]],
    address: ['',[Validators.required]], 
  })
  get fName()
  {
    return this.registerationForm1.get('fName')
  }
  get lName()
  {
    return this.registerationForm.get('lName')
  }
  get email()
  {
    return this.registerationForm.get('email')
  }
  get number()
  {
    return this.registerationForm1.get('number')
  }
  get address()
  {
    return this.registerationForm1.get('address')
  }
  get country()
  {
    return this.registerationForm.get('country')
  }
  get city()
  {
    return this.registerationForm.get('city')
  }
  get region()
  {
    return this.registerationForm.get('region')
  }
    // validation of check out by visa
  get creditID()
  {
    return this.registerationForm.get('creditID')
  }
  get creditName()
  {
    return this.registerationForm.get('creditName')
  }
  get month()
  {
    return this.registerationForm.get('month')
  }
  get year()
  {
    return this.registerationForm.get('year')
  }
  get cvv()
  {
    return this.registerationForm.get('cvv')
  }

  isVisible: number=1

  ngOnInit(): void {
    this. getData()
  }

  Click(){
    // console.log('clicked');
    let order ={
      "ConsistOf": "kdkdkd",
      "Date": new Date(),
      "State":"pending",
      "UserInfo": "4444",
      "IsReviewed": false
    }
    localStorage.setItem("Order",JSON.stringify(order));
    // console.log(order)
    
    this.info.nativeElement.style.display='none'
    this.check.nativeElement.style.display='block'
  }

  finalll(){
    this.check.nativeElement.style.display='none'
    this.fin.nativeElement.style.display='block'
  }

  getData()
  {
   if('allprice' in localStorage){
    this.subTotal=JSON.parse(localStorage.getItem('allprice')!)
   }
  }

 

}

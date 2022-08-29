import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForbiddenEmailValidator } from '../validation/email.validation';
import { ForbiddenZipCodeValidator } from '../validation/zipCode.validation';

@Component({
  selector: 'app-deliverbox',
  templateUrl: './deliverbox.component.html',
  styleUrls: ['./deliverbox.component.css']
})
export class DeliverboxComponent implements OnInit {

  Dates=['Thu, September 01','Fri, September 02','Tue, September 06','Wed, September 07']

  constructor(private fb:FormBuilder,private router: Router) { }

  regestrationDeliverForm=this.fb.group({
    userName:['',[Validators.required]],
    streetAddress:['',[Validators.required]],
    zipCode:['',[Validators.required,Validators.minLength(2)]],
    city:['',[Validators.required]],
    state:['',[Validators.required]],
    // phoneNumber:['',[Validators.required,Validators.minLength(10)]],
    date: ['',[Validators.required]],
    number: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{11}$")]], 
  })

  get date()
  {
    return this.regestrationDeliverForm.get('date')
  }
  get number()
  {
    return this.regestrationDeliverForm.get('number')
  }


   User={
    "userName":"",
    "streetAddress":"",
    "zipCode":"",
    "city":"",
    "state":"",
    "phoneNumber":"",
    "date":"",
  }

  ngOnInit(): void {
    var newUser = localStorage.getItem('User') || '{}'
    this.User =JSON.parse(newUser)
  }

  @ViewChild('userName') userNameVAL! : ElementRef;
  @ViewChild('streetAddress') streetAddressVAL! : ElementRef;
  @ViewChild('zipCode') zipCodeVAL! : ElementRef;
  @ViewChild('city') cityVAL! : ElementRef;
  @ViewChild('state') stateVAL! : ElementRef;
  @ViewChild('phoneNumber') phoneNumberVAL! : ElementRef;
  @ViewChild('day') dateVAL! : ElementRef;
  value:string='';

  ngAfterViewInit(): void {
    this.value = this.userNameVAL.nativeElement.value;
    this.value = this.streetAddressVAL.nativeElement.value;
    this.value = this.zipCodeVAL.nativeElement.value;
    this.value = this.cityVAL.nativeElement.value;
    this.value = this.stateVAL.nativeElement.value;
    this.value = this.phoneNumberVAL.nativeElement.value;
    this.value = this.dateVAL.nativeElement.value;

  }

  onSubmit(){
    this.value = this.userNameVAL.nativeElement.value
    console.log(this.value)
    this.User.userName=this.value
    localStorage.setItem("User", JSON.stringify(this.User))

    var userName = this.regestrationDeliverForm.get('userName')?.value;
    user: {userName:userName}

    // /////////////////////////////////////
    this.value = this.streetAddressVAL.nativeElement.value
    this.User.streetAddress=this.value
    localStorage.setItem("User", JSON.stringify(this.User))

    var streetAddress = this.regestrationDeliverForm.get('streetAddress')?.value;
    user: {streetAddress:streetAddress}

    // /////////////////////////////////////
    this.value = this.zipCodeVAL.nativeElement.value
    this.User.zipCode=this.value
    localStorage.setItem("User", JSON.stringify(this.User));

    var pass = this.regestrationDeliverForm.get('zipCode')?.value;
    user: {zipCode:pass}

    // /////////////////////////////////////
    this.value = this.cityVAL.nativeElement.value
    this.User.city=this.value
    localStorage.setItem("User", JSON.stringify(this.User));

    var pass = this.regestrationDeliverForm.get('city')?.value;
    user: {city:pass}

    // /////////////////////////////////////
    this.value = this.stateVAL.nativeElement.value
    this.User.state=this.value
    localStorage.setItem("User", JSON.stringify(this.User));

    var pass = this.regestrationDeliverForm.get('state')?.value;
    user: {state:pass}

    // /////////////////////////////////////
    this.value = this.phoneNumberVAL.nativeElement.value
    this.User.phoneNumber=this.value
    localStorage.setItem("User", JSON.stringify(this.User));

    var pass = this.regestrationDeliverForm.get('number')?.value;
    user: {phoneNumber:pass}
    // /////////////////////////////////////
    this.value = this.dateVAL.nativeElement.value
    this.User.date=this.value
    localStorage.setItem("User", JSON.stringify(this.User));

    var pass = this.regestrationDeliverForm.get('date')?.value;
    // console.log(pass);
    
    user: {date:pass}

  }



  get userNameFeld(){
    return this.regestrationDeliverForm.get('userName')
  }
  get streetAddressFeld(){
    return this.regestrationDeliverForm.get('streetAddress')
  }
  get zipCodeFeld(){
    return this.regestrationDeliverForm.get('zipCode')
  }
  get cityFeld(){
    return this.regestrationDeliverForm.get('city')
  }
  get stateFeld(){
    return this.regestrationDeliverForm.get('state')
  }
  // get phoneNumberFeld(){
  //   return this.regestrationDeliverForm.get('phoneNumber')
  // }
  // get dateFeld(){
  //   return this.regestrationDeliverForm.get('date')
  // }

}

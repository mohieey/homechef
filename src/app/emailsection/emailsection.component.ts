import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ForbiddenEmailValidator } from '../validation/email.validation';

@Component({
  selector: 'app-emailsection',
  templateUrl: './emailsection.component.html',
  styleUrls: ['./emailsection.component.css']
})
export class EmailsectionComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  regestrationEmailForm=this.fb.group({
    email:['',[Validators.required,ForbiddenEmailValidator(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    zipCode:['',[Validators.required,Validators.minLength(8)]]
  })

  User={
    "email":"",
    "zipCode":""
  }

  ngOnInit(): void {
    var newUser = localStorage.getItem('User') || '{}'
    this.User =JSON.parse(newUser)
  }


  @ViewChild('email') emailVAL! : ElementRef;
  @ViewChild('zipCode') zipCodeVAL! : ElementRef;
  value:string='';

  ngAfterViewInit(): void {
    this.value = this.emailVAL.nativeElement.value;
    console.log(this.value)
    this.value = this.zipCodeVAL.nativeElement.value
    console.log(this.value)
   }


   onSubmit(){
    console.log('UserObject:', this.User)

    this.value = this.emailVAL.nativeElement.value
    console.log(this.value)
    this.User.email=this.value
    localStorage.setItem("User", JSON.stringify(this.User))

    var email = this.regestrationEmailForm.get('email')?.value;
    user: {email:email}


    this.value = this.zipCodeVAL.nativeElement.value
    console.log(this.value)
    this.User.zipCode=this.value
    localStorage.setItem("User", JSON.stringify(this.User));

    var pass = this.regestrationEmailForm.get('zipCode')?.value;
    user: {zipCode:pass}

  }

   get emailFeld(){
    return this.regestrationEmailForm.get('email')
  }
   get zipCodeFeld(){
    return this.regestrationEmailForm.get('zipCode')
  }

}




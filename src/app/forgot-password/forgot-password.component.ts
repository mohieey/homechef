import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { ForbiddenEmailValidator } from '../validation/email.validation';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  flag2:boolean=false
  @ViewChild('check') che!:ElementRef

  constructor(public authService: AuthenticationService,private fb:FormBuilder) {
       
    this.authService.resetpassword.subscribe((resetpassword)=>{
      this.flag2 = resetpassword
    })
   }
   regestrationForgetForm=this.fb.group({
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
  })
   
   
  ngOnInit() {}
  get emailFeld(){
    return this.regestrationForgetForm.get('email')
  }
  display(){
    this.che.nativeElement.style.display='block'
  }
   
}

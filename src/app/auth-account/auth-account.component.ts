import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-auth-account',
  templateUrl:'./auth-account.component.html',
  styleUrls: ['./auth-account.component.css']
})



export class AuthAccountComponent implements OnInit {

  flag:boolean=false
  flag1:boolean=false
  done:boolean=false

  constructor(public authService : AuthenticationService,private fb:FormBuilder,private router: Router){
    this.authService.hasacount.subscribe((hasacount)=>{
       this.flag = hasacount
    })

    this.authService.repetacount.subscribe((repetacount)=>{
      this.flag1 = repetacount
   })
  }
  errorLogin:boolean=true
 
  loginForm = this.fb.group({
    email : ['',  [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [Validators.required]]
  })

 
  ngOnInit(): void {
    
  }
     

 get email(){
  return this.loginForm.get('email')
 }
 get password(){
  return this.loginForm.get('password')
 }

  signup(f: any){
    debugger;
    const email= f.form.controls.email.value;
    const pass= f.form.controls.password.value;
    const name= f.form.controls.name.value;
    this.authService.SignUp(email,pass,name);
  }

}

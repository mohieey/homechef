import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cart:any[]=[]
  cost:number=0

  constructor(public authService: AuthenticationService) { }
  

  ngOnInit(): void {
   setInterval(()=> this.getData(),2000)
   setInterval(()=>this.getuser(),1000)
  }
 
  getData()
  {
   if('cart' in localStorage){
    this.cart=JSON.parse(localStorage.getItem('cart')!)
    this.totalCost()
   }
  }

  addProduct(index:any)
  {
    this.cart[index].quantity ++
    this.totalCost()
    localStorage.setItem('cart',JSON.stringify(this.cart))
  }

  removeProduct(index:any)
  {
   if(this.cart[index].quantity>1){
    this.cart[index].quantity --
    this.totalCost()
    localStorage.setItem('cart',JSON.stringify(this.cart))
   }
  }

  deleteProduct(index:any)
  {
    this.cart.splice(index,1)
    this.totalCost()
    localStorage.setItem('cart',JSON.stringify(this.cart))
  }

  totalCost()
  {
    this.cost=0
    for(const x in this.cart){
     this.cost += this.cart[x].item.price*this.cart[x].quantity
    }
  }

  getuser(){
 this.authService.userData= JSON.parse(localStorage.getItem('user')!)
  }
}

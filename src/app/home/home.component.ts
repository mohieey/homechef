import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../products.service';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
import { AuthenticationService } from '../services/authentication.service';

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 
  products:any[]=[]
  cart:any[]=[]
  amount:number=1
  productsteak:any[]=[]
  productnew:any[]=[]
  constructor(private productsservice:ProductsService,public authService: AuthenticationService) { }

  ngOnInit(): void {

    this.productsservice.getProductsFish().subscribe((productsData)=>{
       this.products=productsData
    })

    this.productsservice.getProductsSteak().subscribe((productsData)=>{
      this.productsteak=productsData
   })

   this.productsservice.getProductsNew().subscribe((productsData)=>{
    this.productnew=productsData
 })


  }

  

  addItem(product:any)
 {
  var obj = {item:product,quantity:this.amount}
  // if (this.user) {
  //   console.log('yes man');
  // }
  // else{}
   
    if (localStorage.getItem('cart')!=null) {
       this.cart = JSON.parse(localStorage.getItem('cart')!)
       var exist = this.cart.find(i => i.item.recipe_id == obj.item.recipe_id)
       if (exist) {
      alert('This recipe is aready added')
      }else{
        this.cart.push(obj)
         localStorage.setItem('cart',JSON.stringify(this.cart))
        console.log(this.cart);
     }

  }else{
    this.cart.push(obj)
    localStorage.setItem('cart', JSON.stringify(this.cart))
   }
  
 }
    
 
}

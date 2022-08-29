import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  allproduct:any[]=[]
  filteredproducts:any[]=[]
  cart:any[]=[]
  amount:number=1


  constructor(private productsservive:ProductsService) { }

  ngOnInit(): void {
    this.productsservive.getProductsOffers().subscribe((data)=>{
      this.allproduct=data;
      this.filteredproducts = data;
  })}


  addItem(product:any)
 {
  var obj = {item:product,quantity:this.amount}
  // if (this.user) {
  //   console.log('yes man');
  // }
  // else{}
   
   
    // console.log('insert ok');
    // console.log(this.cart)
    // localStorage.setItem('cart', JSON.stringify(this.cart))



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

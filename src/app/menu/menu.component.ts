import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  searchTerm:string=''
  smallsearch:string=''
  @ViewChild('notfound') not!:ElementRef
  @ViewChild('allpage') page!:ElementRef
  @ViewChild('repet') rep!:ElementRef

  allproduct:any[]=[]
  filteredproducts:any[]=[]
  cart:any[]=[]
  amount:number=1
  user: string | undefined

  constructor(private productsservive:ProductsService) { }

  ngOnInit(): void {
    this.productsservive.getProducts().subscribe((data)=>{
      this.allproduct=data;
      this.filteredproducts = data;
      setInterval(()=>this.clearValue(),1000)
    })

  }
  
  //search in menu
  clearValue(){
     
     if( this.searchTerm == ''){
      //  this.page.nativeElement.style.display='none'
      //  this.not.nativeElement.style.display='block'
       this.filteredproducts == this.allproduct
     }else{ 
      this.filteredproducts=this.allproduct.filter(d=>{
        return d.category.toLowerCase().includes(this.searchTerm.trim().toLowerCase())
      })
     }
    //  this.searchTerm='';
  }



 // add item to cart
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

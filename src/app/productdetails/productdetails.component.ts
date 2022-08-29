import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
 id:any
 date:any
 product:any[]=[]
 finalproduct:any[]=[]

  constructor(private activatedRoute:ActivatedRoute,private productservice:ProductsService) {
    this.id=this.activatedRoute.snapshot.paramMap.get('recipe_id')
    // console.log(this.id);
    
   }
    
  ngOnInit(): void {

    this.productservice.getProducts().subscribe((res:any)=>{
      this.product=res
      this.finalproduct=this.product.filter(p=>{
        return p.recipe_id == this.id
      })
      // console.log(this.finalproduct);
      
    })
    this.date=new Date()
    // console.log(this.date);
    
  }


}

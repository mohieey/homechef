import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  url:string='/assets/json/menu.json'
  urlfish:string='/assets/json/fish.json'
  urlsteak:string='/assets/json/steak.json'
  urloffers:string='/assets/json/offers.json'
  urlnew:string='/assets/json/vegetarian.json'
  
  
  getProducts():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.url)
  }

  getProductsFish():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.urlfish)
  }
   
  getProductsSteak():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.urlsteak)
  }

  getProductsOffers():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.urloffers)
  }

  getProductsNew():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.urlnew)
  }
 
}

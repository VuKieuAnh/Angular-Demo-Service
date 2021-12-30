import { Injectable } from '@angular/core';
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: "But thien long",
      description: "muc xanh"
    },
    {
      id: 2,
      name: "But thien long",
      description: "muc den"
    }
  ]

  constructor() { }

  getAllProduct(): Product[]{
    return this.products;
  }

  createNewProduct(product: Product){
    this.products.push(product);
  }

  getProductById(id:number){
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) return this.products[i];
    }
    return null;
  }
}

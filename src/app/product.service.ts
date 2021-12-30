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
}

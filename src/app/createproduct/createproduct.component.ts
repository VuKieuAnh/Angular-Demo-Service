import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss']
})
export class CreateproductComponent implements OnInit {

  product: Product ={
    id: 0,
    name: "",
    description: ""
  }

  constructor(
    private  productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  createNewProduct(){
    this.productService.createNewProduct(this.product);
  }

}

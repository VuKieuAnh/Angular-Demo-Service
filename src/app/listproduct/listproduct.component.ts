import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.scss']
})
export class ListproductComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  getAllProduct(): Product[]{
    return this.productService.getAllProduct();
  }

  ngOnInit(): void {
  }

}

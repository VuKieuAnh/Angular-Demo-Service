import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product: Product | null={
    id: 0,
    name:"",
    description:""
  };
  id: number=0;
  sub: Subscription;

  constructor(
    private prs: ProductService,
    private activeRouter: ActivatedRoute
  ) {
    this.sub = this.activeRouter.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = Number(paramMap.get('id'));
        this.product = this.getProductById(this.id);
      }
    )
  }

  ngOnInit(): void {
  }

  getProductById(id: number){
    return this.prs.getProductById(id);
  }

}

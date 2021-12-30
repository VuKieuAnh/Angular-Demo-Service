import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateproductComponent} from "./createproduct/createproduct.component";
import {ListproductComponent} from "./listproduct/listproduct.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [
  {
    path:'create',
    component: CreateproductComponent
  },
  {
    path:'',
    component: ListproductComponent
  },
  {
    path: 'product/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

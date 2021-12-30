import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateproductComponent} from "./createproduct/createproduct.component";
import {ListproductComponent} from "./listproduct/listproduct.component";

const routes: Routes = [
  {
    path:'create',
    component: CreateproductComponent
  },
  {
    path:'',
    component: ListproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

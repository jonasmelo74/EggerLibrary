import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ViewBookComponent } from './view/view-book/view-book.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "books",
    component: ViewBookComponent
  },
  // {
  //   path: "products/create",
  //   component: CreateComponent
  // },
  // {
  //   path: "products/delete/:id",
  //   component: DeleteComponent
  // },
  // {
  //   path: "products/change/:id",
  //   component: ChangeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

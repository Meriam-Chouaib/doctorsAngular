import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductFormComponent} from "../../components/product-form/product-form.component";
import {HomeComponent} from "../../pages/home/home.component";

import {NavbarComponent} from "../../components/navbar/navbar.component";
import {ListProductsComponent} from "../../pages/list-products/list-products.component";
import {AboutComponent} from "../../pages/about/about.component";
import {DoctorsComponent} from "../../pages/doctors/doctors.component";
import {PostsComponent} from "../../pages/posts/posts.component";
const appRoutes: Routes = [

  //when we cant to do a redirect
  {path: ''
    , redirectTo: '/home'
    , pathMatch: 'full' },


  {path: 'addProduct', component:ProductFormComponent },
  /*{path: 'addProduct', component:ProductFormComponent , canActivate:guard}, nzidou guard ki tabda page lezemha a
  *authentification*/
  {path: 'posts', component:PostsComponent },
  {path: 'about', component:AboutComponent },
  {path: 'doctors', component:DoctorsComponent },

  {path: 'home', component:HomeComponent },
  {path: 'products', component:ListProductsComponent },
];
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule{

}

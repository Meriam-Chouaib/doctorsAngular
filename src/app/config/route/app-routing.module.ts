import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../../pages/home/home.component";

import {NavbarComponent} from "../../components/navbar/navbar.component";
import {AboutComponent} from "../../pages/about/about.component";
import {DoctorsComponent} from "../../pages/doctors/doctors.component";
import {PostsComponent} from "../../pages/posts/posts.component";
import {ProfileComponent} from "../../components/profile/profile.component";
const appRoutes: Routes = [

  //when we cant to do a redirect
  {path: ''
    , redirectTo: '/posts'
    , pathMatch: 'full' },


  {path: 'posts', component:PostsComponent },
  {path: 'about', component:AboutComponent,data: { animation: 'isRight' } },
  {path: 'doctors', component:DoctorsComponent },

  {path: 'home', component:HomeComponent },
  {path: 'profile', component:ProfileComponent },
];
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule{

}

import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductFormComponent } from './components/product-form/product-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductsService} from "./services/product-service/products.service";
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import {AppRoutingModule} from "./config/route/app-routing.module";
import { HomeComponent } from './pages/home/home.component';
import {MatListModule} from "@angular/material/list";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzInputModule} from "ng-zorro-antd/input";
import { NzIconModule } from 'ng-zorro-antd/icon';
import {NzCarouselModule} from "ng-zorro-antd/carousel";
import {Routes} from "@angular/router";
import { CarouselComponent } from './components/carousel/carousel.component';
import {NzListModule} from "ng-zorro-antd/list";
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { AboutComponent } from './pages/about/about.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './pages/posts/posts.component';
import { CommentComponent } from './components/comment/comment.component';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import { ReactionsComponent } from './components/reactions/reactions.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzRateModule} from "ng-zorro-antd/rate";
import { FooterComponent } from './components/footer/footer.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzImageModule } from 'ng-zorro-antd/image';
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {StoreModule, MetaReducer} from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TalkAboutComponent } from './components/talk-about/talk-about.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatListModule,
    MatDatepickerModule,
    NzButtonModule,
    NzDropDownModule,
    NzInputModule,
    NzIconModule,
    NzCarouselModule,
    NzListModule,
    NzPaginationModule,
    NzCardModule,
    NzCommentModule,
    NzAvatarModule,
    NzFormModule,
    NzRateModule,
    NzUploadModule,
    NzImageModule,
    NzModalModule,
    NzPopconfirmModule,
    StoreModule,
    EffectsModule,
    StoreDevtoolsModule


  ],
  declarations: [
    AppComponent,
    TestComponent,
    ProductFormComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ProductComponent,
    ListProductsComponent,
    CarouselComponent,
    AboutComponent,
    DoctorsComponent,
    DoctorComponent,
    PostComponent,
    PostsComponent,
    CommentComponent,
    ReactionsComponent,
    AddCommentComponent,
    FooterComponent,
    PostFormComponent,
    TalkAboutComponent,


  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},ProductsService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

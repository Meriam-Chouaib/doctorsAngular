import {Component, Input, OnInit} from '@angular/core';
import {posts} from "../../data/data";
import{talkAbout} from "../../data/data";
import {ProductFormComponent} from "../../components/product-form/product-form.component";
import {successResult} from "../../../helper/success-result";
import {AuthService} from "../../services/auth-service/auth.service";

import {MatDialog} from "@angular/material/dialog";
import {PostFormComponent} from "../../components/post-form/post-form.component";
import {User} from "../../models/User";
import {LoginComponent} from "../../components/login/login.component";
let edit : boolean;
let titleForm : string;
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})


export class PostsComponent implements OnInit {
  user = new User();
postsData = posts;
talkData = talkAbout;

@Input() isLogged:boolean=true;

  constructor(public dialog: MatDialog,private api: AuthService) { }

  ngOnInit(): void {
    // console.log(this.postsData[0].comments)
    console.log(this.talkData)
    this.user = this.api.getUSerFromStorage();
    console.log("from posts", this.user)

  }
  openDialogAddPost(titleForm:string,btnName:string,_id:number): void {
    console.log(titleForm)
    edit = false;
    const dialogRef = this.dialog.open(PostFormComponent, {

      data: {titleForm: titleForm,btnName:btnName,_id:-1}
    });

    dialogRef.afterClosed().subscribe(result => {

      new successResult(true, result, 1, "success")
    });

  }
  openDialogLogin(titleForm:string,btnName:string): void {
    console.log(this.user)
    const dialogRef = this.dialog.open(LoginComponent,{

      data: {titleForm: titleForm,btnName:btnName}
    });
    dialogRef.componentInstance.user = this.user;

    dialogRef.componentInstance.sendUser.subscribe((receivedUser) =>{
      console.log(receivedUser)
      this.user = receivedUser;
      this.isLogged=true;


    })

    // dialogRef.afterClosed().subscribe(result => {
    //   new successResult(true, result, 1, "success")
    // });
  }
  getPostsByKeywords(word:string){
    // this.api.
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {talkAbout} from "../../data/data";
import {successResult} from "../../../helper/success-result";
import {AuthService} from "../../services/auth-service/auth.service";

import {MatDialog} from "@angular/material/dialog";
import {PostFormComponent} from "../../components/post-form/post-form.component";
import {User} from "../../models/User";
import {LoginComponent} from "../../components/login/login.component";
import {PostService} from "../../services/post-service/post.service";
import {Post, PostInterface} from "../../models/Post";

let edit: boolean;
let titleForm: string;

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})


export class PostsComponent implements OnInit {
  user = this.AuthService.getUSerFromStorage();
  postsData: PostInterface[] = [];

  talkData = talkAbout;

  @Input() isLogged: boolean = true;

  constructor(public dialog: MatDialog, private AuthService: AuthService, private postService: PostService) {
  }


  openDialogAddPost(titleForm: string, btnName: string, _id: number): void {
    console.log(titleForm)
    edit = false;
    const dialogRef = this.dialog.open(PostFormComponent, {

      data: {titleForm: titleForm, btnName: btnName, _id: -1}
    });

    dialogRef.afterClosed().subscribe(result => {

      new successResult(true, result, 1, "success")
    });

  }

  openDialogLogin(titleForm: string, btnName: string): void {
    console.log(this.user)
    const dialogRef = this.dialog.open(LoginComponent, {

      data: {titleForm: titleForm, btnName: btnName}
    });
    dialogRef.componentInstance.user = this.user;

    dialogRef.componentInstance.sendUser.subscribe((receivedUser) => {
      console.log(receivedUser)
      this.user = receivedUser;
      this.isLogged = true;
    })

  }

  getPostsByKeywords() {
    const input = document.getElementById('search') as HTMLInputElement | null;
    const searchKey = input?.value;
    console.log("from posts page", searchKey)
    this.postService.getPostsByKeywords(searchKey);

  }

  addSubjectToTalk() {
    const input = document.getElementById('talk-input') as HTMLInputElement | null;
    if (input?.value) {
      const talk = input.value;
      this.postService.addTalk(talk);
      console.log("talks", talk)
    }
    console.log(this.postService.getTalks())

  }

  //Post Api

  onGetPosts(): void {
    this.postService.getPosts().subscribe((res) => {
      // console.log(res.data);
      this.postsData = res.data;
    })
  }

  onGetUser(): void {
    if (this.user._id != 0) {
      this.user = this.AuthService.getUSerFromStorage();
      console.log(this.user)
    }

  }

  ngOnInit(): void {
   this.onGetPosts();
    this.onGetUser()
    console.log("test commande")


  }
}

import {Component, Input, OnInit} from '@angular/core';
import {posts} from "../../data/data";
import {ProductFormComponent} from "../../components/product-form/product-form.component";
import {successResult} from "../../../helper/success-result";

import {MatDialog} from "@angular/material/dialog";
import {PostFormComponent} from "../../components/post-form/post-form.component";
let edit : boolean;
let titleForm : string;
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})


export class PostsComponent implements OnInit {
postsData = posts;

@Input() isLogged:boolean=true;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
    console.log(this.postsData[0].comments)

  }
  openDialogAddPost(): void {
    titleForm = "add post";
    edit = false;
    const dialogRef = this.dialog.open(PostFormComponent);

    dialogRef.afterClosed().subscribe(result => {

      new successResult(true, result, 1, "success")
    });
  }

}

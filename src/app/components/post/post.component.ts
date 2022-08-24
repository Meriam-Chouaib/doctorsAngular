import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/User'
import {Comment} from '../../models/Comment'
import {PostFormComponent} from "../post-form/post-form.component";
import {successResult} from "../../../helper/success-result";
import {MatDialog} from "@angular/material/dialog";
import {NzMessageService} from 'ng-zorro-antd/message';
import {AuthService} from "../../services/auth-service/auth.service";
import {PostService} from "../../services/post-service/post.service";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
  postsData = this.PostService.getPosts();

  @Input()
  _isShown: boolean = false;

  @Input() title: string = '';
  @Input() message: string = '';
  @Input() date: string = '';
  @Input() comments: Comment [] = [];
  @Input() _id: number = 0;
  @Input() likes: number = 0;
  // @Input() user: User ;
  @Input() name: string = '';
  @Input() picture: string | undefined = '';


  private isShownChange: any;

  set isShown(val: boolean) {
    this.isShownChange.emit(val);
    this._isShown = val;
  }

  get isShown() {
    return this._isShown;
  }

  @Output()
  correctChange: EventEmitter<boolean> = new EventEmitter<boolean>();



  constructor(public dialog: MatDialog,private PostService: PostService) {
  }

  ngOnInit(): void {
    console.log(this.isShown);
    console.log(this.comments)
  }

  displayComments() {
    this._isShown = !this._isShown;
  }

  addLike(_id:number) {
this.PostService.addLike();
  }

  removeLike() {
    this.likes = this.likes - 1;
    console.log(this.likes)
  }

  deletePost(_id: number) {
    console.log("delete", _id);
    let index: number = this.postsData.findIndex(i => (i._id == _id));

    if (index !== -1) {
      this.postsData.splice(_id, 1);
      console.log(this.postsData)
    }


  }

  openDialogAddPost(titleForm: string, btnName: string, _id: number): void {

    const dialogRef = this.dialog.open(PostFormComponent, {

      data: {titleForm: titleForm, btnName: btnName, _id: _id}
    });

    dialogRef.afterClosed().subscribe(result => {

      new successResult(true, result, 1, "success")
    });
  }


}

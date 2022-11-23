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

 testUser :boolean = false;
  @Input()
  _isShown: boolean = false;

//@Input():Post ; or ->  @Input() title?: string = '';... les champs kol
  @Input() title?: string = '';
  @Input() message?: string = '';
  @Input() date?: string = "";
  @Input() comments?: Comment [] = [];
  @Input() id: number = -1;
  @Input() liked?: boolean = false;
  @Input() disliked?: boolean = false;
  @Input() user?: User = new User();

  @Input() likes?: number = 0;
  @Input() dislikes?: number = 0;
  @Input() name?: string = '';
  @Input() picture?: string = '';

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


  constructor(public dialog: MatDialog, private PostService: PostService, private AuthService: AuthService) {
  }

  ngOnInit(): void {
    console.log(this.isShown);
     this.testUser = this.checkUser(this.id);
  }

  getPostById(id: number): void {
    this.id = id;
    if (this.id != -1) {
      this.PostService.getPostById(this.id).subscribe((res) => {
        this.likes = res.data.likes;
        this.dislikes = res.data.dislikes;
        this.liked = res.data.liked;
        this.disliked = res.data.disliked;
        this.user = res?.data?.user;
        console.log(res)
      })
    }

  }

  getIdUser() {
    return this.AuthService.getUSerFromStorage()._id;
  }

  displayComments() {
    this._isShown = !this._isShown;
    console.log(this._isShown)
  }

  addLike(_id: number, idUser: number) {

  }

  addDislike(_id: number, idUser: number) {

  }

  getLikes() {

    return this.likes;
  }

  getDislikes() {
    return this.dislikes;
  }

  getIsLiked() {
    return this.liked;
  }

  deletePost(_id: number) {
    console.log(_id);
    this.PostService.deletePost(_id).subscribe((res)=>{
      console.log(res)
      window.location.reload();
    });
  }

  openDialogAddPost(titleForm: string, btnName: string, _id: number): void {
    console.log("dialog open")
    const dialogRef = this.dialog.open(PostFormComponent, {

      data: {titleForm: titleForm, btnName: btnName, _id: _id}
    });

    dialogRef.afterClosed().subscribe(result => {

      new successResult(true, result, 1, "success")
    });
  }

  checkUser(idPost: number) : boolean {
     let response = false;
    if (!this.AuthService.getUSerFromStorage()._id) {
      this.testUser = false
    } else {
      this.PostService.getPostById(idPost)?.subscribe((res) => {
        if (res.data?.user?._id == this.AuthService.getUSerFromStorage()._id)
          this.testUser = true;
         console.log("user id",res.data.user._id,"user from storage",this.AuthService.getUSerFromStorage()._id,"testuser",this.testUser)
      })
    }
    return response;

  }


}

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
  @Input() _id:number=0;
  @Input() liked: boolean = false;
  @Input() disliked: boolean = false;
  @Input() user: User = new User();

  @Input() likes: number =  0;
  @Input() dislikes: number =  0;
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



  constructor(public dialog: MatDialog,private PostService: PostService,private AuthService:AuthService) {
  }
   // likes:number=this.PostService.getPostById(this._id).likes;
  ngOnInit(): void {
    console.log(this.isShown);
    this.likes=  this.PostService.getPostById(this._id).likes;
    this.dislikes=  this.PostService.getPostById(this._id).dislikes;

  }
  getIdUser(){
return this.AuthService.getUSerFromStorage()._id;
  }

  displayComments() {
    this._isShown = !this._isShown;
  }

  addLike(_id:number,idUser:number) {

    this.liked = this.PostService.getPostById(_id).liked;
    console.log(this.liked)
    this.PostService.addLike(_id,!this.liked);


    // console.log("from post",_id)
    // console.log(this.liked)
    // this.PostService.getPostById(_id)
  }
  addDislike(_id:number,idUser:number) {

    this.dislikes = this.PostService.getPostById(_id).dislikes;

    this.likes = this.PostService.getPostById(_id).likes
    this.PostService.addDislike(_id,!this.disliked);
    console.log("from post",_id)
    console.log(this.liked)
    this.PostService.getPostById(_id)
  }
getLikes(){
  //   return this.PostService.getPostById(_id).likes
  // console.log(this.PostService.getPostById(_id))
  return this.PostService.getLikes();
}
  getDislikes(){
    return this.PostService.getDislikes();
  }
getIsLiked(_id:number){
    return this.PostService.getPostById(_id).liked
}
  removeLike() {
this.likes=this.likes --;
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
  checkUser(idPost:number):boolean{
    console.log(idPost,"id post")
    console.log(this.PostService.getPostById(idPost)?.user?._id, " id user post")
    console.log(this.AuthService.getUSerFromStorage()._id, " id user connected")
    if(this.PostService.getPostById(idPost)?.user?._id==this.AuthService.getUSerFromStorage()._id){
      return true;
    }
    return false
  }


}

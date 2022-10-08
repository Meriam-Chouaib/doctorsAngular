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

//@Input():Post ; or ->  @Input() title?: string = '';... les champs kol
  @Input() title?: string = '';
  @Input() message?: string = '';
  @Input() date?: string="" ;
  @Input() comments?: Comment []  = [];
  @Input() _id:number=-1;
  @Input() liked?: boolean = false;
  @Input() disliked?: boolean = false;
  @Input() user?:User = new User();

  @Input() likes?: number =  0;
  @Input() dislikes?: number =  0;
  // @Input() user: User ;
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



  constructor(public dialog: MatDialog,private PostService: PostService,private AuthService:AuthService) {
  }
  ngOnInit(): void {
    console.log(this.isShown);
      this.PostService.getPostById(this._id).subscribe((res)=>{
        // this.likes= res.data.likes;
        // this.dislikes = res.data.dislikes;
        // this.liked = res.data.liked;
        // this.disliked = res.data.disliked;
        // this.user._id = res?.data?.user?.id;
        console.log(res)
      })


  }
  getIdUser(){
return  this.AuthService.getUSerFromStorage()._id;
  }

  displayComments() {
    this._isShown = !this._isShown;
  }

 addLike(_id:number,idUser:number) {
  //
  //   this.liked = this.PostService.getPostById(_id).liked;
  //   console.log(this.liked)
  //   this.PostService.addLike(_id,!this.liked);
  //
  //
  //   // console.log("from post",_id)
  //   // console.log(this.liked)
  //   // this.PostService.getPostById(_id)
  }
   addDislike(_id:number,idUser:number) {
  //
  //   this.dislikes = this.PostService.getPostById(_id).dislikes;
  //
  //   this.likes = this.PostService.getPostById(_id).likes
  //   this.PostService.addDislike(_id,!this.disliked);
  //   console.log("from post",_id)
  //   console.log(this.liked)
  //   this.PostService.getPostById(_id)
  }
getLikes(){

  return this.likes;
}
  getDislikes(){
    return this.dislikes;
  }
getIsLiked(){
    return this.liked;
}

  deletePost(_id: number) {
    this.PostService.deletePost(_id);
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
   this.PostService.getPostById(idPost)?.subscribe((res)=>{
     console.log( res.data.user?.id,"id user post");
     })
    console.log(this.AuthService.getUSerFromStorage()._id, " id user connected")
    // if(this.PostService.getPostById(idPost)?.getData().user?._id==this.AuthService.getUSerFromStorage()._id){
    //   return true;
    // }
     return false
  }


}

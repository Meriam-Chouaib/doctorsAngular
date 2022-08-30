import {Injectable} from '@angular/core';
import {talkAbout, users} from '../../data/data'
import {posts} from '../../data/data'
import {User} from '../../models/User'
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgForm} from "@angular/forms";
import {successResult} from "../../../helper/success-result";
import { Post} from "../../models/Post";
import {AuthService} from "../auth-service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  endpoint: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  usersData = users;
  postsData = posts;
  talksData = talkAbout;
  currentUser = {};
  post: Post = new Post();


  constructor(private http: HttpClient, public router: Router, public AuthService: AuthService) {
  }

  getPosts() {
    return this.postsData;
  }

  getPostsByKeywords(searchKey: string | undefined):({ date: string; comments: ({ date: string; subject: string; _id: string; user: { speciality: string; password: string; name: string; _id: string; picture: string; username: number } } | { date: string; subject: string; _id: number; user: { speciality: string; password: string; name: string; _id: string; picture: string; username: number }; picture: string })[]; _id: number; title: string; message: string; user: { password: string; name: string; _id: string; picture: string; username: number } } | { date: string; comments: { date: string; subject: string; _id: string; user: { speciality: string; password: string; name: string; _id: string; picture: string; username: number } }[]; _id: number; title: string; message: string; user: { password: string; name: string; _id: string; picture: string; username: number }; picture: string } | { date: string; comments: ({ date: string; subject: string; _id: number; user: { speciality: string; password: string; name: string; _id: string; picture: string; username: number }; picture: string } | { date: string; subject: string; _id: string; user: { speciality: string; password: string; name: string; _id: string; picture: string; username: number }; picture: string })[]; _id: number; title: string; message: string; user: { password: string; name: string; _id: string; picture: string; username: number } })[]  {
    console.log(searchKey, "from api")
    if (searchKey) {
      return this.postsData.filter(post => post.title.includes(searchKey) || post.message.includes(searchKey))
    }
    return this.postsData

  }
  addPost(form: NgForm){
    this.post._id = this.postsData.length++;
    this.post.title = form.value.title;
    this.post.message = form.value.message;
    this.post.picture = form.value.picture;
    // this.post = form as unknown as Post;
    this.post.user = this.AuthService.getUSerFromStorage();
    // this.postsData[length++] = this.post;
  //  console.log()
  //  this.postsData.push(this.post);
 //   console.log(this.postsData)
    console.log(this.post)
  }
  getPostById(idPost:number){
    let index: number = this.postsData.findIndex(i => (i._id == idPost));
     // console.log(this.postsData[index])
    this.post.title = this.postsData[index].title;
    this.post.message = this.postsData[index].message;
    this.post.picture = this.postsData[index].picture;
    this.post.likes = this.postsData[index].likes;
    this.post.dislikes = this.postsData[index].dislikes;
    this.post.liked = this.postsData[index].liked;
    this.post.disliked = this.postsData[index].disliked;
    this.post._id = idPost;

    return this.post;
  }
  addLike(_id:number,liked:boolean){
    console.log("fromservice",_id)
    this.post = this.getPostById(_id)

    if( this.post.liked==true){

    this.post.likes++;
      console.log(  this.post.liked,this.post.likes)
      this.post.liked = !liked;

    }
    else{
      this.post.likes= this.getPostById(_id).likes -1;

      console.log(  this.post.liked,this.post.likes)
      this.post.liked = true;
      this.post.liked = !liked;

    }


  }
  addDislike(_id:number){
    console.log("fromservice",_id)
     this.getPostById(_id).disliked = !this.getPostById(_id).disliked;
    if(this.getPostById(_id).disliked==true){
      this.getPostById(_id).dislikes++;
      console.log(  this.getPostById(_id))

    }
    else{
      this.getPostById(_id).dislikes --;
    }


  }
  getLikes(){
    return this.post.likes;
  }
getTalks(){
    return this.talksData;
}
addTalk(talk:string){
    this.talksData.push(talk);
}

}

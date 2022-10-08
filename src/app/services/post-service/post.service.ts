import {Injectable} from '@angular/core';
 import {talkAbout} from '../../data/data'
 //import { users} from '../../data/data'
// import {posts} from '../../data/data'
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
import {ProductModel} from "../../models/Product";
import {ApiResponse} from "../../models/ApiResponse";
import {PostResponse} from "../../models/PostResponse";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  BASE_URL: string = 'http://localhost:8080/api/articles';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  postsData :{}={};
  talksData = talkAbout;
  currentUser = {};
  post: Post = new Post();



  constructor(private http: HttpClient, public router: Router, public AuthService: AuthService) {
  }

  getPosts(): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${this.BASE_URL}/list`);
  }

  getPostsByKeywords(searchKey: string | undefined):({ date: string; comments: ({ date: string; subject: string; _id: string; user: { speciality: string; password: string; name: string; _id: string; picture: string; username: number } } | { date: string; subject: string; _id: number; user: { speciality: string; password: string; name: string; _id: string; picture: string; username: string }; picture: string })[]; dislikes: number; _id: number; disliked: boolean; title: string; message: string; user: { password: string; name: string; _id: string; picture: string; username: string }; liked: boolean; likes: number } | { date: string; comments: { date: string; subject: string; _id: string; user: { speciality: string; password: string; name: string; _id: string; picture: string; username: string } }[]; dislikes: number; _id: number; disliked: boolean; title: string; message: string; user: { password: string; name: string; _id: string; picture: string; username: string }; picture: string; liked: boolean; likes: number } | { date: string; comments: ({ date: string; subject: string; _id: number; user: { speciality: string; password: string; name: string; _id: string; picture: string; username: string }; picture: string } | { date: string; subject: string; _id: string; user: { speciality: string; password: string; name: string; _id: string; picture: string; username: string }; picture: string })[]; dislikes: number; _id: number; disliked: boolean; title: string; message: string; user: { password: string; name: string; _id: string; picture: string; username: string }; picture: string; liked: boolean; likes: number })[] | null
  {
    // console.log(searchKey, "from api")
    // if (searchKey) {
    //   this.getPosts().subscribe((res)=>{
    //     this.postsData = res.data;
    //     return this.postsData.filter(post => post.title.includes(searchKey) || post.message.includes(searchKey))
    //
    //   })
    //
    // }
   //  return this.postsData
    return null;

  }
  addPost(form: Post){
    let postAdded = new Post();
    postAdded = form;
    // postAdded.title = form.value.title;
    // postAdded.message = form.value.message;
    // postAdded.picture = form.value.picture;
    postAdded.user = this.AuthService.getUSerFromStorage();
    return this.http.post<PostResponse>(`${this.BASE_URL}/save`, postAdded);

  }
  editPost(form: Post,idPost:number){

    return this.http.put<PostResponse>(`${this.BASE_URL}/update/${idPost}`, form);


  }

deletePost(idPost:number){
  return this.http.get<PostResponse>(`${this.BASE_URL}/delete/${idPost}`);

}

  getPostById(idPost:number){

    console.log(idPost);
    return this.http.get<PostResponse>(`${this.BASE_URL}/${idPost}`);
  }

  // addLike(_id:number,liked:boolean){
  //   console.log("fromservice",_id,"liked",liked)
  //   this.post = this.getPostById(_id).getData();
  //   this.post.liked = liked;
  //   if( liked){
  //
  //   this.post.likes++;
  //     console.log( "liked post:" ,this.post.liked,"likes:",this.post.likes)
  //   }
  //   else{
  //     this.post.likes--;
  //     console.log( "liked post:" ,this.post.liked,"likes:",this.post.likes)
  //     this.post.likes= this.getPostById(_id).likes -1;
  //
  //     console.log(  this.post.liked,this.post.likes)
  //
  //   }
  // }

  // addDislike(_id:number,disliked:boolean){
  //   console.log("fromservice",_id,"liked",disliked)
  //   this.post = this.getPostById(_id)
  //   this.post.liked = disliked;
  //   if( disliked){
  //
  //     this.post.dislikes++;
  //     console.log( "liked post:" ,this.post.disliked,"likes:",this.post.dislikes)
  //   }
  //   else{
  //     this.post.dislikes--;
  //     console.log( "disliked post:" ,this.post.disliked,"dislikes:",this.post.dislikes)
  //     this.post.dislikes= this.getPostById(_id).dislikes -1;
  //
  //     console.log(  this.post.disliked,this.post.dislikes)
  //
  //   }
  // }

getTalks(){
    return this.talksData;
}
addTalk(talk:string){
    this.talksData.push(talk);
}

}

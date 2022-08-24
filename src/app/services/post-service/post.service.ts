import {Injectable} from '@angular/core';
import {users} from '../../data/data'
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
import {Post} from "../../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  endpoint: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  usersData = users;
  postsData = posts;
  currentUser = {};
  post: Post = new Post();

  constructor(private http: HttpClient, public router: Router) {
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
    //@ts-ignore
    this.postsData.push(this.post);
    console.log(this.postsData)
  }
  getPostById(idPost:number){
    let index: number = this.postsData.findIndex(i => (i._id == idPost));
    console.log(this.postsData[index])
    this.post.title = this.postsData[index].title;
    this.post.message = this.postsData[index].message;
    this.post.picture = this.postsData[index].picture;
    return this.post;
  }
  addLike(){
    this.getPostById(this.post._id).liked = !this.getPostById(this.post._id).liked;
  }


}

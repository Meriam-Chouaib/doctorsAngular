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
import {Post} from "../../models/Post";
import {AuthService} from "../auth-service/auth.service";
import {ApiResponse} from "../../models/ApiResponse";
import {PostResponse} from "../../models/PostResponse";


@Injectable({
  providedIn: 'root'
})
export class PostService {
  BASE_URL: string = 'http://localhost:8080/api/articles';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  postsData: {} = {};
  talksData = talkAbout;
  currentUser = {};
  post: Post = new Post();


  constructor(private http: HttpClient, public router: Router, public AuthService: AuthService) {
  }

  getPosts(): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${this.BASE_URL}/list`);
  }

  getPostsByKeywords(searchKey: string | undefined): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${this.BASE_URL}/list/${searchKey}`);
  }

  addPost(form: Post) {
    form.user = this.AuthService.getUSerFromStorage();
    return this.http.post<PostResponse>(`${this.BASE_URL}/save`, form);
    console.log("post added from service")

  }

  editPost(form: Post, idPost: number) {

    return this.http.put<PostResponse>(`${this.BASE_URL}/update/${idPost}`, form);


  }

  deletePost(idPost: number) {
    return this.http.get<PostResponse>(`${this.BASE_URL}/delete/${idPost}`);

  }

  getPostById(idPost: number) {

    // console.log(idPost);
    return this.http.get<PostResponse>(`${this.BASE_URL}/${idPost}`);
  }

  getTalks() {
    return this.talksData;
  }

  addTalk(talk: string) {
    this.talksData.push(talk);
  }

}

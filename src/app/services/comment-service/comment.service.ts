import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../auth-service/auth.service";
import {ApiResponse} from "../../models/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  BASE_URL: string = 'http://localhost:8080/comments';

  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient, public router: Router, public AuthService: AuthService) { }

  addComment(idPost:number,idUser:number,commentForm:Comment){
    return this.http.post<ApiResponse>(`${this.BASE_URL}/${idUser}/article/${idPost}/save`, commentForm);

  }
  getAllComments(idPost:number,idUser:number){
    return this.http.get<ApiResponse>(`${this.BASE_URL}/${idUser}/article/${idPost}/list`);

  }
}

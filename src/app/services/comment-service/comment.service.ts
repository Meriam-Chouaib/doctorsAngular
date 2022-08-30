import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../auth-service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient, public router: Router, public AuthService: AuthService) { }

  addComment(idPost:number,idUser:number,commentForm:Comment){

  }
}

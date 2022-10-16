import {Injectable} from '@angular/core';
import {users} from '../../data/data'
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
import {ApiResponse, Data} from "../../models/ApiResponse";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL: string = 'http://localhost:8080';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  usersData = users;
  currentUser = {};
  isLogged: boolean = false;
  user: User = new User();

  constructor(private http: HttpClient, public router: Router) {
  }

  //*****User*****

  signUp(loginForm: User|undefined): Observable<ApiResponse> {

    console.log("from sign up service")
   // return this.http.post<ApiResponse>(`${this.BASE_URL}/users/save`, loginForm);
    return this.http.post<ApiResponse>(`${this.BASE_URL}/api/auth/signup`, loginForm);

  }

  signIn(loginForm: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.BASE_URL}/api/auth/signin`, loginForm );

  };



  deletUser(_id: number) {
    return this.http.get<ApiResponse>(`${this.BASE_URL}/users/delete/${_id}`);

  }

  getUsers() {
    return this.http.get<ApiResponse>(`${this.BASE_URL}/users/list`);

  }

  updateUser(loginForm: User,idUser:number) {

      this.http.put<ApiResponse>(`${this.BASE_URL}/update/${idUser}`, loginForm);

  }


  getUserById(idUser:number){
    return this.http.get<ApiResponse>(`${this.BASE_URL}/${idUser}`);

  }
  getUSerFromStorage() {

    let storageProfileString = localStorage.getItem("profile");
    if (storageProfileString != null) {
      this.user = JSON.parse(storageProfileString);
      //  console.log("from storage", this.user)
      return this.user;
    }
    return this.user;
  }

  setUserToStorage(loginForm: User) {
    this.user = loginForm;
    localStorage.setItem("profile", JSON.stringify(this.user));
  }


  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }


  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}

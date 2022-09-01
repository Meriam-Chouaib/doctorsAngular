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


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  usersData = users;
  currentUser = {};
  isLogged: boolean = false;
  user: User = new User();

  constructor(private http: HttpClient, public router: Router) {
  }

  //*****User*****

  signUp(loginForm: User): User [] {
    this.user = loginForm;
    console.log("from sign up")

    this.user._id = this.usersData.length++;
    this.user.speciality = undefined;
    this.user.description = undefined;
    this.user.isAdmin = false;

    console.log("success from service",this.user)

    // @ts-ignore
    this.usersData.push(this.user);

    //console.log(this.usersData);
    // let api = `${this.endpoint}/register`;
    // return this.http.post(api, user).pipe(catchError(this.handleError));
    return this.usersData
  }

  signIn(loginForm: User): any {
    let index: number = this.usersData.findIndex(i => (i.username == loginForm.username) && (i.password == loginForm.password));
    if (index != -1) {
      try {
        this.user = this.usersData[index];
        this.user.isLogged = true;
        console.log("success from service", this.user)
        this.setUserToStorage(this.user)
      } catch (e) {
        console.log('password or username failed', e)
      }

    }


  };

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

  deletUser(_id: number) {
    console.log("delete", _id);
    let index: number = this.usersData.findIndex(i => (i._id == _id));

    if (index !== -1) {
      this.usersData.splice(_id, 1);
      console.log(this.usersData)
    }
  }

  getUsers() {
    return this.usersData
  }

  updateUser(loginForm: User) {
    let index: number = this.usersData.findIndex(i => (i.username == loginForm.username) && (i.password == loginForm.password));
    if (index != -1) {
      try {
        loginForm.username != null && ((this.usersData[index].username = loginForm.username) && (this.user.username = loginForm.username));
        loginForm.name != null && ((this.usersData[index].name = loginForm.name) && (this.user.name = loginForm.name));
        loginForm.description != null && ((this.usersData[index].description = loginForm.description) && (this.user.description = loginForm.description));


        this.setUserToStorage(this.user)
      } catch (e) {
        console.log('password or username failed', e)
      }

    }
  }

  //use the back
  // signIn(user: User) {
  //   return this.http
  //     .post<any>(`${this.endpoint}/login`, user)
  //     .subscribe((res: any) => {
  //       localStorage.setItem('access_token', res.token);
  //
  //     });
  // }

  getUserById(idUser:number){
    let index: number = this.usersData.findIndex(i => (i._id == idUser) );
    return this.usersData[index];

  }

}

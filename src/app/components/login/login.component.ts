import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth-service/auth.service";
import {successResult} from "../../../helper/success-result";
import {error} from "@angular/compiler/src/util";
import {User} from "../../models/User";

import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  btnName: string = "";
  titleMod: string = "";
  isLogged: boolean = false;

  private dialog: any;

  user = new User();

  usersData = this.AuthService.getUsers();

  @Input() name: string = '';
  @Input() username: string = '';

  @Input() speciality: string = '';

  @Output() onCancel = new EventEmitter();
  @Output() sendUser: EventEmitter<any> = new EventEmitter();

  private loginForm: NgForm | undefined;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private AuthService: AuthService) {
  }

  ngOnInit(): void {

    this.getUserAndUpdate();
  }

  getUserAndUpdate() {
    this.titleMod = this.data.titleForm;
    this.btnName = this.data.btnName;
    // console.log(this.usersData)
    // console.log(this.data._id)
    let index: number = this.usersData.findIndex(i => (i._id == this.data._id));
    console.log(this.data._id)
    console.log(this.usersData[index])
    this.user.username = this.usersData[index].username.toString();
    this.user.speciality = this.usersData[index].speciality;
    console.log(this.usersData)
  }

  cancel() {
    this.onCancel.emit();
  }

  signIn(loginForm: NgForm): any {
    this.loginForm = loginForm;
    this.AuthService.signIn(this.loginForm.value);
    console.log("from login component", this.AuthService.getUSerFromStorage());
    this.user = this.AuthService.getUSerFromStorage();
    console.log("user recuperé", this.user)
    this.user.isLogged = true;
    window.location.reload();


  };

  signUp(loginForm: NgForm): any {
    this.loginForm = loginForm;
    this.AuthService.signUp(this.loginForm.value)


  }

  EditDoctor(loginForm: NgForm) {

    console.log(this.usersData)
    console.log(this.data._id)
    let index: number = this.usersData.findIndex(i => (i._id == this.data._id));
    console.log(index)
    console.log(this.usersData[index])
    this.usersData[index].name = loginForm.value.username;
    this.usersData[index].speciality = loginForm.value.speciality;

    console.log("docter updated", this.usersData[index])
  }
}


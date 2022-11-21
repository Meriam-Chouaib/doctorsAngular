import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth-service/auth.service";
import {successResult} from "../../../helper/success-result";
import {error} from "@angular/compiler/src/util";
import {User} from "../../models/User";

import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Data} from "../../models/ApiResponse";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  btnName: string = "";
  titleMod: string = "";
  isLogged: boolean = false;

  id: number = 0;

  private dialog: any;

  user = this.AuthService.getUSerFromStorage();

  

  @Input() name: string = '';
  @Input() username: string = '';

  @Input() speciality: string = '';

  @Output() onCancel = new EventEmitter();
  @Output() sendUser: EventEmitter<any> = new EventEmitter();

  private loginUser: User | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private AuthService: AuthService) {
  }

  ngOnInit(): void {

    this.titleMod = this.data.titleForm;

  }

  getUserAndUpdate(idUSer: number, userInfo: NgForm) {

    this.AuthService.updateUser(userInfo.value, idUSer).subscribe((res)=>{
      console.log(res)
    })

    if (this.titleMod == "Edit informations") {
      this.AuthService.setUserToStorage(userInfo.value);
    }
    console.log("update user ", idUSer)
  }

  cancel() {
    this.onCancel.emit();
  }

  signIn(loginUser: NgForm): any {
    //loginUser = loginUser.value.toJSON();
    this.user = loginUser.value;
    console.log(this.user)

    this.AuthService.signIn(this.user).subscribe((res) => {

       console.log("result of api is ",res);
      console.log("id user", res.id,"the role is",res.roles[0]);
     // console.log(res.headers.get('Authorization'));
       this.AuthService.getUserById(res.id).subscribe((res) => {
     //
       console.log("result of getting the user by id", res);
        this.user = res.data as unknown as User;
      this.user.isLogged = true;
      this.AuthService.setUserToStorage(this.user);
         console.log("the user connected is", this.user);
     //
      })

      window.location.reload();

    });

  };

  getUserById(id: number) {
    this.AuthService.getUserById(id).subscribe((res) => {
      // this.user = res.data as unknown as User ;
      // console.log("before putting to storage",this.user)
      // this.AuthService.setUserToStorage(this.user);
      console.log("result of getting the user by id", res);

    })
  }

  signUp(loginUser: NgForm): any {
    this.loginUser = loginUser.value;
    console.log(this.loginUser);
    this.AuthService.signUp(this.loginUser).subscribe((res) => {

      this.user = res.data as unknown as User;
      window.location.reload();

    })
  }
}


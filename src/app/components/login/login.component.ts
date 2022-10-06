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

  id:number = 0;

  private dialog: any;

  user = new User();

  usersData = this.AuthService.getUsers();

  @Input() name: string = '';
  @Input() username: string = '';

  @Input() speciality: string = '';

  @Output() onCancel = new EventEmitter();
  @Output() sendUser: EventEmitter<any> = new EventEmitter();

  private loginUser: User | undefined;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private AuthService: AuthService) {
  }

  ngOnInit(): void {

  }

  getUserAndUpdate(idUSer:number,userInfo:NgForm) {

this.AuthService.updateUser(userInfo as unknown as User,idUSer);

    console.log("update user ",idUSer)
  }

  cancel() {
    this.onCancel.emit();
  }

  signIn(loginUser: NgForm): any {

  this.AuthService.signIn(loginUser).subscribe((res)=>{
    if(res.status == 200){
      this.AuthService.setUserToStorage(res.data as unknown as User) ;
      this.user = this.AuthService.getUSerFromStorage();
      window.location.reload();
      console.log("the user connected is",this.user);
    }

  });


  };

  signUp(loginUser: NgForm): any {
    this.loginUser = loginUser as unknown as User;
    this.AuthService.signUp(this.loginUser).subscribe((res) => {

this.user = res.data as unknown as User;
    })


  }


}


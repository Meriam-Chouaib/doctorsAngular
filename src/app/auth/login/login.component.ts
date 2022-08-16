import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterComponent} from "../register/register.component";
import {ProductsService} from "../../services/product-service/products.service";
import {AuthService} from "../../services/auth-service/auth.service";
import {successResult} from "../../../helper/success-result";
import {error} from "@angular/compiler/src/util";
import {users} from "../../data/data";
import {User} from "../../models/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() user = new EventEmitter<User>();

  loginForm !: FormGroup;
  private dialog: any;

  usersData = users;

  constructor(private formBuilder: FormBuilder, private api: AuthService,) {
  }

  ngOnInit(): void {
    this.validator();
    this.usersData;

  }

  /*openDialogRegister(): void {
    const dialogRef = this.dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }*/
  validator() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

    })
  }



  login(): any {

    let isLogged:boolean;
    let index :  number = this.usersData.findIndex(i => (i.username == this.loginForm.value.username) && (i.password == this.loginForm.value.password));
    if (this.loginForm.valid && index != -1) {
      try {
        let user: any = this.usersData[index];
        isLogged = true;
        this.user.emit(user)

        console.log("success",user)


        //this.api.signIn(this.loginForm.value)

       //  return new successResult(true, this.usersData[index], 1, "success")

      } catch (e) {
        return new successResult(false, [], 0, "failed")
      }

    } else {
      isLogged = false;
      console.log("no user", this.loginForm.value)
    }
  };
}

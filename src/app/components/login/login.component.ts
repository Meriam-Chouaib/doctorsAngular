import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {ProductsService} from "../../services/product-service/products.service";
import {AuthService} from "../../services/auth-service/auth.service";
import {successResult} from "../../../helper/success-result";
import {error} from "@angular/compiler/src/util";
import {users} from "../../data/data";
import {User} from "../../models/User";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import {AppState} from "../../ngrx/states/app.state";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  btnName: string = "";
  titleMod: string = "";

  private dialog: any;

  //user = new User();
  usersData = users;

  @Input() public user: User=new User();
  @Input() name: string = '';
  @Input() username: string = '';

  @Input() speciality: string = '';

  @Output() onCancel = new EventEmitter();
  @Output() sendUser: EventEmitter<any> = new EventEmitter();

  // constructor(private api: AuthService, @Inject(MAT_DIALOG_DATA) public data: any,public store: Store<AppState>) {
  constructor(private api: AuthService, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {

    this.titleMod = this.data.titleForm;
    this.btnName = this.data.btnName;
    console.log(this.usersData)
    console.log(this.data._id    )
    let index: number = this.usersData.findIndex(i => (i._id == this.data._id));
    console.log(index)
    console.log(this.usersData[index])
    this.user.username = this.usersData[index].username.toString();
    this.user.speciality = this.usersData[index].speciality;
    console.log(this.usersData)
  }

  /*openDialogRegister(): void {
    const dialogRef = this.dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }*/
  // validator() {
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required],
  //
  //   })
  // }

  cancel() {
    this.onCancel.emit();
  }


  login(loginForm: NgForm): any {

    let isLogged: boolean;
    let index: number = this.usersData.findIndex(i => (i.username == loginForm.value.username) && (i.password == loginForm.value.password));
    if (loginForm.valid) {
      if (index != -1) {
        try {
          let user = this.usersData[index];
          isLogged = true;


          console.log("success", user)
          //this.api.signIn(this.loginForm.value)

          this.sendUser.emit(user);

        } catch (e) {
          return new successResult(false, [], 0, "failed")
          console.log(successResult)
        }

      } else {
        console.log("add user", loginForm.value)
      }
    } else {
      isLogged = false;
      console.log("form no valid", loginForm.value)
      console.log("form valid", loginForm.valid)
    }
  };
}

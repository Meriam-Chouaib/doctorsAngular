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
  isLogged: boolean = false;

  private dialog: any;

  user = new User();

  usersData = users;

  // @Input() public user: User = new User("","","");
  @Input() name: string = '';
  @Input() username: string = '';

  @Input() speciality: string = '';

  @Output() onCancel = new EventEmitter();
  @Output() sendUser: EventEmitter<any> = new EventEmitter();

  // constructor(private api: AuthService, @Inject(MAT_DIALOG_DATA) public data: any,public store: Store<AppState>) {
  private loginForm: NgForm | undefined;

  constructor(private api: AuthService, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {

    this.getUserAndUpdate();
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

  getUserAndUpdate() {
    this.titleMod = this.data.titleForm;
    this.btnName = this.data.btnName;
    // console.log(this.usersData)
    // console.log(this.data._id)
    let index: number = this.usersData.findIndex(i => (i._id == this.data._id));
    console.log(index)
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
    this.api.signIn(this.loginForm.value);
    console.log("from login component", this.api.getUSerFromStorage());
    this.user = this.api.getUSerFromStorage();
    console.log("user recuperé", this.user)
    this.user.isLogged = true;


  };

  signUp(loginForm: NgForm): any {
    this.loginForm = loginForm;
    this.api.signUp(this.loginForm.value)


  }

}


import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginComponent} from "../../auth/login/login.component";
import {successResult} from "../../../helper/success-result";
import {MatDialog} from "@angular/material/dialog";
import {User} from "../../models/User";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user = new User();
  isLogged:boolean=false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogLogin(titleForm:string,btnName:string): void {
    console.log(this.user)
    const dialogRef = this.dialog.open(LoginComponent,{

      data: {titleForm: titleForm,btnName:btnName}
    });
    dialogRef.componentInstance.user = this.user;

    dialogRef.componentInstance.sendUser.subscribe((receivedUser) =>{
      console.log(receivedUser)
      this.user = receivedUser;
      this.isLogged=true;


    })

    // dialogRef.afterClosed().subscribe(result => {
    //   new successResult(true, result, 1, "success")
    // });
  }

}

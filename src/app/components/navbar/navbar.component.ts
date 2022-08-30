import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {successResult} from "../../../helper/success-result";
import {MatDialog} from "@angular/material/dialog";
import {User} from "../../models/User";
import {AuthService} from "../../services/auth-service/auth.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user = new User();

  constructor(public dialog: MatDialog,private authService: AuthService) {
    // this.user=this.authService.getUSerFromStorage();
  }

  ngOnInit(): void {
    this.user=this.authService.getUSerFromStorage();
  }
  openDialogLogin(titleForm:string,btnName:string): void {
    console.log(titleForm)
    const dialogRef = this.dialog.open(LoginComponent,{

      data: {titleForm: titleForm,btnName:btnName}
    });

    dialogRef.componentInstance.user = this.user;

    dialogRef.componentInstance.sendUser.subscribe((receivedUser) =>{
      console.log(receivedUser)

      this.user = receivedUser;


    })

    // dialogRef.afterClosed().subscribe(result => {
    //   new successResult(true, result, 1, "success")
    // });
  }

  logout(){
    console.log("logout")
    let userReset:User = new User();
    userReset._id=0;
    console.log(userReset)
  this.authService.setUserToStorage(userReset);
    window.location.reload();
  }
}

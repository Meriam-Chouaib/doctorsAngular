import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginComponent} from "../../auth/login/login.component";
import {successResult} from "../../../helper/success-result";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogLogin(titleForm:string,btnName:string): void {
    const dialogRef = this.dialog.open(LoginComponent,{

      data: {titleForm: titleForm,btnName:btnName}
    });

    dialogRef.afterClosed().subscribe(result => {
      new successResult(true, result, 1, "success")
    });
  }

}

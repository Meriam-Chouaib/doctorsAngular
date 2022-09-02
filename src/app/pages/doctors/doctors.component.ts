import {Component, Input, OnInit} from '@angular/core';
import {fakeData, users} from '../../data/data'
import {PostFormComponent} from "../../components/post-form/post-form.component";
import {MatDialog} from "@angular/material/dialog";
import {successResult} from "../../../helper/success-result";
import {LoginComponent} from "../../components/login/login.component";
import {AuthService} from "../../services/auth-service/auth.service";
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {


  constructor(public dialog: MatDialog, public AuthService : AuthService) { }
  usersData = this.AuthService.getUsers();
  ngOnInit(): void {
    this.usersData;
    console.log(this.usersData[0].picture)
  }
  user = this.AuthService.getUSerFromStorage();
  openDialogAddDoctor(titleForm:string,btnName:string,_id:number): void {
    const dialogRef = this.dialog.open(LoginComponent, {

      data: {titleForm: titleForm,btnName:btnName,_id:-1}
    });
    dialogRef.afterClosed().subscribe(result => {

      new successResult(true, result, 1, "success")
    });
  }

}

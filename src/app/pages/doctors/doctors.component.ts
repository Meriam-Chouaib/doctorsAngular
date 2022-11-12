import {Component, Input, OnInit} from '@angular/core';
import {fakeData, users} from '../../data/data'
import {PostFormComponent} from "../../components/post-form/post-form.component";
import {MatDialog} from "@angular/material/dialog";
import {successResult} from "../../../helper/success-result";
import {LoginComponent} from "../../components/login/login.component";
import {AuthService} from "../../services/auth-service/auth.service";
import {UserInterface} from "../../models/User";
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  doctorsData: UserInterface[] = [];


  constructor(public dialog: MatDialog, public AuthService : AuthService) { }
  getDoctors(): void{

    this.AuthService.getDoctors().subscribe((res)=>{

      this.doctorsData = res.data as unknown as UserInterface [];
    });
  }
  ngOnInit(): void {
 this.getDoctors();
    console.log(this.doctorsData)
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

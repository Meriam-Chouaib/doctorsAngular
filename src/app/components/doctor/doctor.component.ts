import {Component, Input, OnInit} from '@angular/core';
import {PostFormComponent} from "../post-form/post-form.component";
import {successResult} from "../../../helper/success-result";
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";
import {AuthService} from "../../services/auth-service/auth.service";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  @Input() name: string = '';
  @Input()  speciality:string = '';
  @Input()  description:string = '';
  @Input() picture: string | null= '';
  @Input() _id: number = 0;
  constructor(public dialog: MatDialog, public AuthService:AuthService,) { }

  ngOnInit(): void {
  }
  openDialogAddDoctor(titleForm: string, btnName: string, _id: number): void {

    const dialogRef = this.dialog.open(LoginComponent, {

      data: {titleForm: titleForm, btnName: btnName, _id: _id}
    });

    dialogRef.afterClosed().subscribe(result => {

      new successResult(true, result, 1, "success")
    });
  }
  deleteUSer(_id: number) {
    console.log("delete", _id);
    this.AuthService.deletUser(_id);
    // let index: number = this.postsData.findIndex(i => (i._id == _id));
    //
    // if (index !== -1) {
    //   this.postsData.splice(_id, 1);
    //   console.log(this.postsData)
    // }


  }
  user = this.AuthService.getUSerFromStorage();


}

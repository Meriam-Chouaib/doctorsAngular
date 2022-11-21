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
  space : string = ' ';
  @Input() name: string = '';
  @Input() username: string = '';
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
    this.AuthService.deletUser(_id).subscribe((res)=>{
      console.log(res)
    });

  }
  user = this.AuthService.getUSerFromStorage();


}

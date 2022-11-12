import { Component, OnInit } from '@angular/core';
import {STRINGS} from '../../../core/enums/strings';
import {fader, slider} from "../../config/route-animations"
import {AuthService} from "../../services/auth-service/auth.service";
import {User, UserInterface} from "../../models/User";
import {Data} from "../../models/ApiResponse";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
  //fader
    slider
]

})

export class AboutComponent implements OnInit {
  STRINGS=STRINGS;
  doctorsData: UserInterface[] = [];

  constructor( public AuthService : AuthService) { }
  getDoctors(): void{

    this.AuthService.getDoctors().subscribe((res)=>{

      this.doctorsData = res.data as unknown as UserInterface [];
    });
  }


  ngOnInit(): void {
    this.getDoctors();
  }

}

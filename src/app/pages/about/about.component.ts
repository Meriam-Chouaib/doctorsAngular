import { Component, OnInit } from '@angular/core';
import {STRINGS} from '../../../core/enums/strings';
import {fader, slider} from "../../config/route-animations"
import {AuthService} from "../../services/auth-service/auth.service";
import {User} from "../../models/User";
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

  constructor( public AuthService : AuthService) { }
  getUsers(): any{
    this.AuthService.getUsers().subscribe((res)=>{

      return res.data;
    });
  }


  ngOnInit(): void {
  }

}

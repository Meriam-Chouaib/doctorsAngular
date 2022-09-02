import { Component, OnInit } from '@angular/core';
import {STRINGS} from '../../../core/enums/strings';
import {fader, slider} from "../../config/route-animations"
import {AuthService} from "../../services/auth-service/auth.service";

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
  usersData = this.AuthService.getUsers();

  ngOnInit(): void {
  }

}

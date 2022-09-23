import { Component, OnInit } from '@angular/core';
import{AuthService} from "../../services/auth-service/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public AuthService: AuthService) { }

  ngOnInit(): void {
  }
  userProfile = this.AuthService.getUSerFromStorage();


}

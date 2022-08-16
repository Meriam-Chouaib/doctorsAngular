import {Component, Input, OnInit} from '@angular/core';
import {fakeData, users} from '../../data/data'
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  usersData = users;



  constructor() { }

  ngOnInit(): void {
    this.usersData;
    console.log(this.usersData[0].picture)
  }


}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  @Input() name: string = '';
  @Input()  speciality:string = '';
  @Input() picture: string | null= '';
  @Input() id: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {STRINGS} from '../../../core/enums/strings';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  STRINGS=STRINGS;

  constructor() { }

  ngOnInit(): void {
  }

}

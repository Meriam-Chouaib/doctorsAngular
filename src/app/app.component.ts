import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "./components/login/login.component";
import {successResult} from "../helper/success-result";
import {Store} from "@ngrx/store";
// import * as fromStore from '@app/state';
import {RouterOutlet} from "@angular/router";
import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  title = 'untitled';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  constructor(public dialog: MatDialog
             // private readonly store: Store
  ) {}
  ngOnInit(): void {

    }





}

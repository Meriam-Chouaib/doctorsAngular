import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "./components/login/login.component";
import {ProductModel} from "./models/Product";
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

  products : ProductModel[]=[]; //déclaration variable ou on va stocker le résultat initialisation à vide de type Product(interface Product existe dans products.service.ts)
  title = 'untitled';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  constructor(public dialog: MatDialog
             // private readonly store: Store
  ) {} //function getProducts de type ProductsService ism service eli bch nekhdhou bih all products
 // user$ = this.store.select(LoginComponent.arguments)
  ngOnInit(): void {

 //   console.log(this.user$)
    }

    openDialogLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      new successResult(true, result, 1, "success")
    });
  }





}

import {Component, OnInit} from '@angular/core';
import {ProductFormComponent} from "./components/product-form/product-form.component";
import {MatDialog} from "@angular/material/dialog";
import { ProductsService} from "./services/product-service/products.service";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {ProductModel} from "./models/Product";
import {successResult} from "../helper/success-result";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  products : ProductModel[]=[]; //déclaration variable ou on va stocker le résultat initialisation à vide de type Product(interface Product existe dans products.service.ts)
  title = 'untitled';
  constructor(public dialog: MatDialog, public getProducts:ProductsService ) {} //function getProducts de type ProductsService ism service eli bch nekhdhou bih all products

  ngOnInit(): void {

    this.onGetProducts(); //nraj3ou lfonction eli bch tekhou résultat mte3 service déclaré en bas
    }

    openDialogLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      new successResult(true, result, 1, "success")
    });
  }


  onGetProducts():void{
    this.getProducts.getProducts().subscribe( //nameService.nameFunctions.subscribe
      (res)=> {
          this.products = res
        new successResult(true, this.products, 1, "success")

      }
    )
  }


}

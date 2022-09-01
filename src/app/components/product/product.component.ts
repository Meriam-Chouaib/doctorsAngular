import {Component, Input, OnInit} from '@angular/core';
import {ProductFormComponent} from "../product-form/product-form.component";
import {MatDialog} from "@angular/material/dialog";
import {ProductsService} from "../../services/product-service/products.service";
import{fakeData} from "../../data/data";
import {successResult} from "../../../helper/success-result";
import {AuthService} from "../../services/auth-service/auth.service";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  _id: string ='1';//will chanhe after rgxn (context)

  productsData = fakeData;

  @Input() description: string = '';
  @Input()  price: number = 0;
  @Input() title: string = '';
  @Input() id: number = 0;


  constructor(public dialog: MatDialog, public getProducts:ProductsService , public AuthService:AuthService) { }

  ngOnInit(): void {
  }
  openDialogEditProduct(id:number): void {
    // console.log(id)
    // console.log(this.fakeData[0])
     const dialogRef = this.dialog.open(ProductFormComponent , {data : fakeData[id]});
     dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
     });
  }
  deleteProduct(id: string): void {
    let productsData = fakeData;

    // this.productsService.deleteProduct(id)
    try {
      if (Number(id) > -1) {
        this.productsData.splice(Number(id), 1);
      }

      console.log(id);
      console.log(this.productsData)
      new successResult(true, this.productsData, this.productsData?.length, "success")

    } catch (error) {
      new successResult(false, [], 0, "failed")
    }
  }



}

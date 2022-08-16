import {Component, OnInit} from '@angular/core';
import {ProductsService} from 'src/app/services/product-service/products.service';

import {ProductModel} from '../../models/Product'
import {successResult} from "../../../helper/success-result";
import {ProductFormComponent} from "../../components/product-form/product-form.component";
import {MatDialog} from "@angular/material/dialog";
import {fakeData} from "../../data/data";
export let edit = false;
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})


export class ListProductsComponent implements OnInit {
  productsData = fakeData;
  page: number = 1;
  pgNmbr = Math.floor(fakeData.length / 6);
  slicedPage = this.productsData.slice(0, 6);

  onChange(param: any): void {
    this.page = (param) * 6;
    this.slicedPage = fakeData.slice(this.page - 6, this.page);
    console.log(param)

  }

  constructor(private productsService: ProductsService, public dialog: MatDialog,) {//first load of component
  }

  // products: ProductModel[] | undefined;

  ngOnInit() {//first change in the page
    this.productsData;
   edit;
  }

  openDialogAddProduct(): void {
   edit = false;
    const dialogRef = this.dialog.open(ProductFormComponent);

    dialogRef.afterClosed().subscribe(result => {

      new successResult(true, result, 1, "success")
    });
  }

  getProducts(): void {
    try {
      new successResult(true, this.productsData, this.productsData?.length, "success")
    } catch (error) {
      new successResult(false, [], 0, "failed")
    }
    // this.productsService.getProducts()
    //   .subscribe(
    //     res => new successResult(true, this.productsData, this.productsData?.length, "success"),
    //     err => new successResult(false, [], 0, err)
    //   )
  }

  deleteProduct(id: string): void {
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

  editProduct(item: any) {
    this.productsData[this.productsData.findIndex(el => el._id === item._id)] = item;

  }


  onPageIndexChange() {
    //do something here to go to next page
  }


}


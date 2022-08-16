import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ProductsService} from "../../services/product-service/products.service";
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {Inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductModel} from "../../models/Product";
import {successResult} from "../../../helper/success-result";
import {fakeData} from "../../data/data";
import {controlClassNames} from "@angular/core/schematics/migrations/typed-forms/util";
// import {edit} from "../../pages/list-products/list-products.component";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})

export class ProductFormComponent implements OnInit {
   edit : boolean = false;

  productsData = fakeData
  productForm !: FormGroup;
  @Input() description: string = '';
  @Input() price: number = 0;
  @Input() title: string = '';
  @Input() id: string = '';
  @Input() titleForm: string = '';

  product: ProductModel = {
    _id: '',
    title: '',
    description: '',
    price: 0

  };


  constructor(private formBuilder: FormBuilder,
              private api: ProductsService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: {
                _id: string;
                title: string;
                description: string;
                price: number
              }) {
  }

  //   private activatedRoute: ActivatedRoute


  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    console.log(this.productsData)

    // this.validator();
    if (params['id']) {
      this.api.getProduct(params['id'])
        .subscribe(
          res => {
            this.product = res;

            new successResult(true, res, 1, "success")
          },
          err => new successResult(false, [], 0, "failed")
        )
    }
    this.productForm = this.formBuilder.group({
      title: [this.title, Validators.required],
      // title: [this.data.title, Validators.required],
      price: [this.price, Validators.required],
      description: [this.description, Validators.required]
    })


  }

  // validator() {
  //   this.productForm = this.formBuilder.group({
  //     title: [this.data.title, Validators.required],
  //     price: [this.data.price, Validators.required],
  //     description: [this.data.description, Validators.required]
  //   })
  // }

  // addProduct() {
  //   console.log(this.data)
  //
  //   if (this.productForm.valid) {
  //     //if(this.fakeProduct.indexOf(this.data)){
  //     this.api.createProduct(this.product)
  //       .subscribe({
  //         next: (res) => {
  //
  //           this.router.navigate(['/']);
  //           new successResult(true, res, 1, "success")
  //         },
  //         error: () => {
  //           new successResult(false, [], 0, "failed")
  //         }
  //       })
  //
  //
  //   }
  // }
  //
  // editProduct() {
  //   this.api.editProduct(this.productForm.value._id, this.productForm.value)
  //     .subscribe(
  //       res => {
  //
  //         this.router.navigate(['/product'])
  //         new successResult(true, res, 1, "success")
  //
  //       },
  //       err => new successResult(false, [], 0, err)
  //     )
  // }
  editProduct(item: any) {


    try {
      this.productsData[this.productsData.findIndex(el => el._id === item._id)] = item;
      new successResult(true, this.productsData, this.productsData?.length, "success")


    } catch (err) {
      new successResult(false, this.productsData, this.productsData?.length, "failed edit product")

    }

  }

  addProduct(item: any) {


    item._id = (this.productsData.length + 1).toString();

    item.description = this.description;
    item.title = this.title;
    item.price = this.price;
    this.productsData.push(item);

    console.log(item)
    console.log(this.productsData)

  }
}

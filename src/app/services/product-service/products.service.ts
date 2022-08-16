import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable, observable} from "rxjs";
import {ProductModel} from "../../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.BASE_URL}/products`);
  }

  public editProduct(id: string, product: ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${this.BASE_URL}/products/update?id=${id}`, product);
  }

  public createProduct(data: any) {
    return this.http.post<number>('http://localhost:3000/products', data);
  }

  public getProduct(id: string) {
    console.log(id);
    return this.http.get<ProductModel>(`${this.BASE_URL}/products/id=${id}`);
  }

  public deleteProduct(id: string): Observable<ProductModel> {
    console.log(id);
    return this.http.delete<ProductModel>(`${this.BASE_URL}/product/delete?id=${id}`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar}from '@angular/material/snack-bar'
import { Observable} from "rxjs";
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://127.0.0.1:3001/products'
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  create(product: Product): Observable <Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
  
  showMessage(msg: string) {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
}

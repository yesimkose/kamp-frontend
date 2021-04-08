import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//apideki veriye ulaşmayı sağlar.
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
apiUrl="https://localhost:44314//api/Products/getall";

  getProducts():Observable<ProductResponseModel>{
    return this.httpClient.get<ProductResponseModel>(this.apiUrl)
    };
  }


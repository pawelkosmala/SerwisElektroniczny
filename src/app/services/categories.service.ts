import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { Category } from '../models/Category';
import { Product } from '../models/Product';
import { Parameter } from '../models/Parameter';
import { Comment } from '../models/Comment';

import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {}

  public getCategories() {
    return this.http.get<Category[]>('../../assets/categories.json');
  }
  public getProducts() {
    return this.http.get<Product[]>('../../assets/products.json');
  }
  public getParameters() {
    return this.http.get<Parameter[]>('../../assets/parameters.json');
  }
  public getComments() {
    return this.http.get<Comment[]>('../../assets/comments.json');
  }

}

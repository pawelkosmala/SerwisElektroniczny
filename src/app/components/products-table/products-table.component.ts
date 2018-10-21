import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Product } from '../../models/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  products: Product[];
  categoryId: Number;

  constructor(private categoriesService: CategoriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryId = parseInt(params.id, 0);
    });

    this.categoriesService.getProducts().subscribe((data: Product[]) => {
      this.products = data.filter(product => product.category_id === this.categoryId);
      });
  }

}

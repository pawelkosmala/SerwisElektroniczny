import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Product } from '../../models/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  @ViewChild('newProduct') newProductElement: ElementRef;

  products: Product[];
  categoryId: number;
  isEditMode: boolean = false;

  constructor(private categoriesService: CategoriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryId = parseInt(params.id, 0);
    });

    this.categoriesService.getProducts().subscribe((data: Product[]) => {
      this.products = data.filter(product => product.category_id === this.categoryId);
      });
  }

  changeProductStatus(productId) {
    for (let i in this.products) {
      var currentProduct = this.products[i];

      if (currentProduct.product_id === productId) {
        currentProduct.product_status = !currentProduct.product_status;
      }
    }
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;

    if (this.isEditMode) {
      setTimeout(() => {
        this.newProductElement.nativeElement.focus();
      }, 0);
    }
  }

  saveNewProduct(productName) {
    var lastElementId;

    if (this.products.length > 0) {
      lastElementId = this.products[this.products.length - 1].product_id;
    } else {
      lastElementId = 0;
    }

    let elementToAdd = {
      category_id: this.categoryId,
      product_id: lastElementId + 1,
      product_name: productName,
      product_status: false
    }

    this.products.push(elementToAdd);
    this.toggleEditMode();
  }

  deleteProduct(productId) {
    this.products = this.products.filter(product => {
      if (product.product_id === productId) return false;
      else return true;
    })
  }
}

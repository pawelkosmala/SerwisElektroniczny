import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Parameter } from '../../models/Parameter';
import { Comment } from '../../models/Comment';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  parameters: Parameter[];
  comments: Comment[];
  productId: Number;

  constructor(private categoriesService: CategoriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = parseInt(params.id, 0);
    });

    this.categoriesService.getParameters().subscribe((data: Parameter[]) => {
      this.parameters = data.filter(parameter => parameter.product_id === this.productId);
      });
    this.categoriesService.getComments().subscribe((data: Comment[]) => {
      this.comments = data.filter(comment => comment.product_id === this.productId);
      });
  }

}

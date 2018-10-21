import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Parameter } from '../../models/Parameter';
import { Comment } from '../../models/Comment';
import { Product } from '../../models/Product';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @ViewChild('newComment') newCommentElement: ElementRef;
  @ViewChild('newParameterName') newParameterNameElement: ElementRef;
  @ViewChild('newParameterValue') newParameterValueElement: ElementRef;

  parameters: Parameter[];
  comments: Comment[];
  productId: number;
  categoryId: number;

  isCommentEditMode: boolean = false;
  isParameterEditMode: boolean = false;

  constructor(private categoriesService: CategoriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = parseInt(params.id, 0);
    });

    this.categoriesService.getProducts().subscribe((data: Product[]) => {
      this.categoryId = data.filter(product => product.product_id === this.productId)[0].category_id;
    });

    this.categoriesService.getParameters().subscribe((data: Parameter[]) => {
      this.parameters = data.filter(parameter => parameter.product_id === this.productId);
    });

    this.categoriesService.getComments().subscribe((data: Comment[]) => {
      this.comments = data.filter(comment => comment.product_id === this.productId);
    });

  }

  toggleCommentEditMode() {
    this.isCommentEditMode = !this.isCommentEditMode;

    if (this.isCommentEditMode) {
      setTimeout(() => {
        this.newCommentElement.nativeElement.focus();
      }, 0);
    }
  }

  toggleParameterEditMode() {
    this.isParameterEditMode = !this.isParameterEditMode;

    if (this.isParameterEditMode) {
      setTimeout(() => {
        this.newParameterNameElement.nativeElement.focus();
      }, 0);
    }
  }

  saveNewComment(newComment) {
    let lastElementId;

    if (this.comments.length > 0) {
      lastElementId = this.comments[this.comments.length - 1].comment_id;
    } else {
      lastElementId = 0;
    }

    let elementToAdd = {
      product_id: this.productId,
      comment_id: lastElementId + 1,
      comment_content: newComment
    };

    this.comments.push(elementToAdd);
    this.toggleCommentEditMode();
  }

  saveNewParameter(newParameterName, newParameterValue) {
    let lastElementId;

    if (this.parameters.length > 0) {
      lastElementId = this.parameters[this.parameters.length - 1].parameter_id;
    } else {
      lastElementId = 0;
    }

    let elementToAdd = {
      product_id: this.productId,
      parameter_id: lastElementId + 1,
      parameter_name: newParameterName,
      parameter_value: newParameterValue
    };

    this.parameters.push(elementToAdd);
    this.toggleParameterEditMode();
  }

  deleteComment(commentId) {
    this.comments = this.comments.filter(comment => {
      if (comment.comment_id === commentId)
         return false;
      else
         return true;
    });
  }

  deleteParameter(parameterId) {
    this.parameters = this.parameters.filter(parameter => {
      if (parameter.parameter_id === parameterId)
        return false;
      else
      return true;
    });
  }
}

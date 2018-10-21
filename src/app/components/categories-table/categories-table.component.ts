import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.css']
})
export class CategoriesTableComponent implements OnInit {

  @ViewChild('newCategory') newCategoryElement: ElementRef;

  categories: Category[];
  isEditMode: boolean = false;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((data: Category[]) => {
    this.categories = data;
    });
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;

    if (this.isEditMode) {
      setTimeout(() => {
        this.newCategoryElement.nativeElement.focus();
      }, 0);
    }
  }

  saveNewCategory(categoryName) {
    let lastElementId;

    if (this.categories.length > 0) {
      lastElementId = this.categories[this.categories.length - 1].category_id;
    } else {
      lastElementId = 0;
    }

    let elementToAdd = {
      category_id: lastElementId + 1,
      category_name: categoryName
    };

    this.categories.push(elementToAdd);
    this.toggleEditMode();
  }

  deleteCategory(categoryId) {
    this.categories = this.categories.filter(category => {
      if (category.category_id === categoryId) {
        return false;
      } else {
        return true;
      }
    })
  }
}

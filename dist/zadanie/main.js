(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin-top: 20px;\r\n}\r\nh2 {\r\n  display: inline-block;\r\n  margin-left: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'zadanie';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_categories_table_categories_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/categories-table/categories-table.component */ "./src/app/components/categories-table/categories-table.component.ts");
/* harmony import */ var _components_products_table_products_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/products-table/products-table.component */ "./src/app/components/products-table/products-table.component.ts");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product-details/product-details.component */ "./src/app/components/product-details/product-details.component.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/categories.service */ "./src/app/services/categories.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Components




// Services

// Routes
var appRoutes = [
    { path: '', component: _components_categories_table_categories_table_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesTableComponent"] },
    { path: 'category/:id', component: _components_products_table_products_table_component__WEBPACK_IMPORTED_MODULE_7__["ProductsTableComponent"] },
    { path: 'product/:id', component: _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailsComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_categories_table_categories_table_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesTableComponent"],
                _components_products_table_products_table_component__WEBPACK_IMPORTED_MODULE_7__["ProductsTableComponent"],
                _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [
                _services_categories_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/categories-table/categories-table.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/categories-table/categories-table.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    cursor: pointer;\r\n}\r\ninput {\r\n  margin-right: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/categories-table/categories-table.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/categories-table/categories-table.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <h2>Kategorie</h2>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <ng-container *ngIf='isEditMode'>\r\n        <div>\r\n            <input type=\"text\" placeholder=\"Nazwa kategorii\" #newCategory (keyup.enter)=\"saveNewCategory(newCategory.value)\">\r\n            <button class=\"btn btn-success\" (click)=\"saveNewCategory(newCategory.value)\">Zapisz</button>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n    <div class=\"col-md-2\" *ngIf=!isEditMode>\r\n        <button class=\"btn btn-success btn-block\" (click)=\"toggleEditMode()\"> <i class=\"fa fa-plus\"></i>\r\n          Dodaj\r\n        </button>\r\n    </div>\r\n    <div class=\"col-md-2\" *ngIf=isEditMode>\r\n        <button class=\"btn btn-danger btn-block\" (click)=\"toggleEditMode()\">\r\n          Anuluj\r\n        </button>\r\n    </div>\r\n</div>\r\n<table *ngIf=\"categories?.length > 0; else noCategories\" class=\"table table-striped\">\r\n    <thead class=\"thead-inverse\">\r\n        <tr>\r\n            <th>Id</th>\r\n            <th>Nazwa</th>\r\n            <th>Produkty</th>\r\n            <th></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let category of categories\">\r\n            <td>{{category.category_id}}</td>\r\n            <td>{{category.category_name}}</td>\r\n            <td><a [routerLink]=\"['/category/'+category.category_id]\" href=\"\" class=\"btn btn-secondary btn-sm\"><i class=\"fa fa-arrow-circle-o-right\"></i> Produkty</a></td>\r\n            <td><button class=\"btn btn-danger btn-sm\" (click)=\"deleteCategory(category.category_id)\">Usuń kategorię</button></td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<ng-template #noCategories>\r\n    <hr>\r\n    <h5>Brak kategorii</h5>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/components/categories-table/categories-table.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/categories-table/categories-table.component.ts ***!
  \***************************************************************************/
/*! exports provided: CategoriesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesTableComponent", function() { return CategoriesTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/categories.service */ "./src/app/services/categories.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesTableComponent = /** @class */ (function () {
    function CategoriesTableComponent(categoriesService) {
        this.categoriesService = categoriesService;
        this.isEditMode = false;
    }
    CategoriesTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesService.getCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    CategoriesTableComponent.prototype.toggleEditMode = function () {
        var _this = this;
        this.isEditMode = !this.isEditMode;
        if (this.isEditMode) {
            setTimeout(function () {
                _this.newCategoryElement.nativeElement.focus();
            }, 0);
        }
    };
    CategoriesTableComponent.prototype.saveNewCategory = function (categoryName) {
        var lastElementId;
        if (this.categories.length > 0) {
            lastElementId = this.categories[this.categories.length - 1].category_id;
        }
        else {
            lastElementId = 0;
        }
        var elementToAdd = {
            category_id: lastElementId + 1,
            category_name: categoryName
        };
        this.categories.push(elementToAdd);
        this.toggleEditMode();
    };
    CategoriesTableComponent.prototype.deleteCategory = function (categoryId) {
        this.categories = this.categories.filter(function (category) {
            if (category.category_id === categoryId) {
                return false;
            }
            else {
                return true;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newCategory'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CategoriesTableComponent.prototype, "newCategoryElement", void 0);
    CategoriesTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories-table',
            template: __webpack_require__(/*! ./categories-table.component.html */ "./src/app/components/categories-table/categories-table.component.html"),
            styles: [__webpack_require__(/*! ./categories-table.component.css */ "./src/app/components/categories-table/categories-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]])
    ], CategoriesTableComponent);
    return CategoriesTableComponent;
}());



/***/ }),

/***/ "./src/app/components/product-details/product-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    display: inline-block;\r\n    margin-left: 5px;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\n.card-title {\r\n    padding: 0.75rem 1.25rem;\r\n}\r\n\r\ninput {\r\n  margin-right: 10px;\r\n  }\r\n\r\ntextarea {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/product-details/product-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-1\">\r\n        <a [routerLink]=\"['/category/'+categoryId]\" href=\"\" class=\"btn btn-secondary\"><i class=\"fa fa-arrow-circle-o-left\"></i> Powrót</a>\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n        <h2>Szczegóły Produktu</h2>\r\n    </div>\r\n    <div class=\"col-md-6\"></div>\r\n    <div class=\"col-md-2\"></div>\r\n</div>\r\n<table *ngIf=\"parameters?.length > 0; else noParameters\" class=\"table table-striped\">\r\n    <thead class=\"thead-inverse\">\r\n        <tr>\r\n            <th>Id Parametru</th>\r\n            <th>Nazwa</th>\r\n            <th>Wartość</th>\r\n            <th>\r\n                <button class=\"btn btn-success\" (click)=\"toggleParameterEditMode()\" *ngIf=\"!isParameterEditMode\">Dodaj parametr</button>\r\n                <button class=\"btn btn-danger\" (click)=\"toggleParameterEditMode()\" *ngIf=\"isParameterEditMode\">Anuluj</button>\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let parameter of parameters\">\r\n            <td>{{parameter.parameter_id}}</td>\r\n            <td>{{parameter.parameter_name}}</td>\r\n            <td>{{parameter.parameter_value}}</td>\r\n            <td>\r\n                <button class=\"btn btn-danger btn-sm\" (click)=\"deleteParameter(parameter.parameter_id)\">Usuń</button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<ng-template #noParameters>\r\n    <div class=\"d-flex justify-content-between\">\r\n        <h5>Brak parametrów</h5>\r\n        <button class=\"btn btn-success\" (click)=\"toggleParameterEditMode()\" *ngIf=\"!isParameterEditMode\">Dodaj parametr</button>\r\n        <button class=\"btn btn-danger\" (click)=\"toggleParameterEditMode()\" *ngIf=\"isParameterEditMode\">Anuluj</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-container *ngIf=\"isParameterEditMode\">\r\n    <div>\r\n        <input type=\"text\" placeholder=\"Nazwa parametru\" #newParameterName>\r\n        <input type=\"text\" placeholder=\"Wartość\" #newParameterValue>\r\n        <button class=\"btn btn-success\" (click)=\"saveNewParameter(newParameterName.value, newParameterValue.value)\">Zapisz</button>\r\n    </div>\r\n</ng-container>\r\n\r\n<div class=\"card mt-5\">\r\n    <div class=\"card-body\" *ngIf=\"comments?.length > 0; else noComments\">\r\n        <div class=\"card-title d-flex justify-content-between\">\r\n            <h3>Komentarze</h3>\r\n            <button class=\"btn btn-success\" (click)=\"toggleCommentEditMode()\" *ngIf=\"!isCommentEditMode\">Dodaj komentarz</button>\r\n            <button class=\"btn btn-danger\" (click)=\"toggleCommentEditMode()\" *ngIf=\"isCommentEditMode\">Anuluj</button>\r\n        </div>\r\n\r\n        <ul class=\"list-group list-group-flush\" *ngFor=\"let comment of comments\">\r\n            <li class=\"list-group-item d-flex justify-content-between\">\r\n                {{ comment.comment_content }}\r\n                <button class=\"btn btn-danger\" (click)=\"deleteComment(comment.comment_id)\">Usuń komentarz</button>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<ng-template #noComments>\r\n    <div class=\"card-title d-flex justify-content-between\">\r\n        <h5>Brak komentarzy</h5>\r\n        <button class=\"btn btn-success\" (click)=\"toggleCommentEditMode()\">Dodaj komentarz</button>\r\n    </div>\r\n</ng-template>\r\n<ng-container *ngIf=\"isCommentEditMode\">\r\n    <div>\r\n        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" placeholder=\"Treść komentarza\" #newComment (keyup.enter)=\"saveNewComment(newComment.value)\"></textarea>\r\n        <button class=\"btn btn-success col-md-12\" (click)=\"saveNewComment(newComment.value)\">Zapisz</button>\r\n    </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/components/product-details/product-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(categoriesService, route) {
        this.categoriesService = categoriesService;
        this.route = route;
        this.isCommentEditMode = false;
        this.isParameterEditMode = false;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.productId = parseInt(params.id, 0);
        });
        this.categoriesService.getProducts().subscribe(function (data) {
            _this.categoryId = data.filter(function (product) { return product.product_id === _this.productId; })[0].category_id;
        });
        this.categoriesService.getParameters().subscribe(function (data) {
            _this.parameters = data.filter(function (parameter) { return parameter.product_id === _this.productId; });
        });
        this.categoriesService.getComments().subscribe(function (data) {
            _this.comments = data.filter(function (comment) { return comment.product_id === _this.productId; });
        });
    };
    ProductDetailsComponent.prototype.toggleCommentEditMode = function () {
        var _this = this;
        this.isCommentEditMode = !this.isCommentEditMode;
        if (this.isCommentEditMode) {
            setTimeout(function () {
                _this.newCommentElement.nativeElement.focus();
            }, 0);
        }
    };
    ProductDetailsComponent.prototype.toggleParameterEditMode = function () {
        var _this = this;
        this.isParameterEditMode = !this.isParameterEditMode;
        if (this.isParameterEditMode) {
            setTimeout(function () {
                _this.newParameterNameElement.nativeElement.focus();
            }, 0);
        }
    };
    ProductDetailsComponent.prototype.saveNewComment = function (newComment) {
        var lastElementId;
        if (this.comments.length > 0) {
            lastElementId = this.comments[this.comments.length - 1].comment_id;
        }
        else {
            lastElementId = 0;
        }
        var elementToAdd = {
            product_id: this.productId,
            comment_id: lastElementId + 1,
            comment_content: newComment
        };
        this.comments.push(elementToAdd);
        this.toggleCommentEditMode();
    };
    ProductDetailsComponent.prototype.saveNewParameter = function (newParameterName, newParameterValue) {
        var lastElementId;
        if (this.parameters.length > 0) {
            lastElementId = this.parameters[this.parameters.length - 1].parameter_id;
        }
        else {
            lastElementId = 0;
        }
        var elementToAdd = {
            product_id: this.productId,
            parameter_id: lastElementId + 1,
            parameter_name: newParameterName,
            parameter_value: newParameterValue
        };
        this.parameters.push(elementToAdd);
        this.toggleParameterEditMode();
    };
    ProductDetailsComponent.prototype.deleteComment = function (commentId) {
        this.comments = this.comments.filter(function (comment) {
            if (comment.comment_id === commentId)
                return false;
            else
                return true;
        });
    };
    ProductDetailsComponent.prototype.deleteParameter = function (parameterId) {
        this.parameters = this.parameters.filter(function (parameter) {
            if (parameter.parameter_id === parameterId)
                return false;
            else
                return true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newComment'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProductDetailsComponent.prototype, "newCommentElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newParameterName'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProductDetailsComponent.prototype, "newParameterNameElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newParameterValue'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProductDetailsComponent.prototype, "newParameterValueElement", void 0);
    ProductDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/components/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/components/product-details/product-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/products-table/products-table.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/products-table/products-table.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    display: inline-block;\r\n    margin-left: 5px;\r\n}\r\n\r\n.btn,\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\ninput {\r\nmargin-right: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/products-table/products-table.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/products-table/products-table.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-1\">\r\n        <a [routerLink]=\"['']\" href=\"\" class=\"btn btn-secondary\"><i class=\"fa fa-arrow-circle-o-left\"></i> Powrót</a>\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n        <h2> Produkty</h2>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <ng-container *ngIf='isEditMode'>\r\n        <div>\r\n            <input type=\"text\" placeholder=\"Nazwa produktu\" #newProduct (keyup.enter)=\"saveNewProduct(newProduct.value)\">\r\n            <button class=\"btn btn-success\" (click)=\"saveNewProduct(newProduct.value)\">Zapisz</button>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n    <div class=\"col-md-2\" *ngIf=!isEditMode>\r\n        <button class=\"btn btn-success btn-block\" (click)=\"toggleEditMode()\"> <i class=\"fa fa-plus\"></i>\r\n            Dodaj\r\n        </button>\r\n    </div>\r\n    <div class=\"col-md-2\" *ngIf=isEditMode>\r\n        <button class=\"btn btn-danger btn-block\" (click)=\"toggleEditMode()\">\r\n            Anuluj\r\n        </button>\r\n    </div>\r\n</div>\r\n<table *ngIf=\"products?.length > 0; else noProducts\" class=\"table table-striped\">\r\n    <thead class=\"thead-inverse\">\r\n        <tr>\r\n            <th>Id Produktu</th>\r\n            <th>Nazwa</th>\r\n            <th>Status</th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let product of products\">\r\n            <td>{{product.product_id}}</td>\r\n            <td>{{product.product_name}}</td>\r\n            <td>{{ product.product_status ? '1' : '0'}}</td>\r\n            <td>\r\n                <button class=\"btn btn-info btn-sm\" (click)=\"changeProductStatus(product.product_id)\">\r\n                <i class=\"fa fa-arrow-circle-o-right\"></i>\r\n                Zmień status\r\n                </button>\r\n            </td>\r\n            <td><button class=\"btn btn-danger btn-sm\" (click)=\"deleteProduct(product.product_id)\">Usuń produkt</button></td>\r\n            <td><a [routerLink]=\"['/product/'+product.product_id]\" href=\"\" class=\"btn btn-secondary btn-sm\"><i class=\"fa fa-arrow-circle-o-right\"></i> Szczegóły</a></td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<ng-template #noProducts>\r\n    <hr>\r\n    <h5>Brak produktów</h5>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/components/products-table/products-table.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/products-table/products-table.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsTableComponent", function() { return ProductsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsTableComponent = /** @class */ (function () {
    function ProductsTableComponent(categoriesService, route) {
        this.categoriesService = categoriesService;
        this.route = route;
        this.isEditMode = false;
    }
    ProductsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.categoryId = parseInt(params.id, 0);
        });
        this.categoriesService.getProducts().subscribe(function (data) {
            _this.products = data.filter(function (product) { return product.category_id === _this.categoryId; });
        });
    };
    ProductsTableComponent.prototype.changeProductStatus = function (productId) {
        for (var i in this.products) {
            var currentProduct = this.products[i];
            if (currentProduct.product_id === productId) {
                currentProduct.product_status = !currentProduct.product_status;
            }
        }
    };
    ProductsTableComponent.prototype.toggleEditMode = function () {
        var _this = this;
        this.isEditMode = !this.isEditMode;
        if (this.isEditMode) {
            setTimeout(function () {
                _this.newProductElement.nativeElement.focus();
            }, 0);
        }
    };
    ProductsTableComponent.prototype.saveNewProduct = function (productName) {
        var lastElementId;
        if (this.products.length > 0) {
            lastElementId = this.products[this.products.length - 1].product_id;
        }
        else {
            lastElementId = 0;
        }
        var elementToAdd = {
            category_id: this.categoryId,
            product_id: lastElementId + 1,
            product_name: productName,
            product_status: false
        };
        this.products.push(elementToAdd);
        this.toggleEditMode();
    };
    ProductsTableComponent.prototype.deleteProduct = function (productId) {
        this.products = this.products.filter(function (product) {
            if (product.product_id === productId)
                return false;
            else
                return true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newProduct'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProductsTableComponent.prototype, "newProductElement", void 0);
    ProductsTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-table',
            template: __webpack_require__(/*! ./products-table.component.html */ "./src/app/components/products-table/products-table.component.html"),
            styles: [__webpack_require__(/*! ./products-table.component.css */ "./src/app/components/products-table/products-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductsTableComponent);
    return ProductsTableComponent;
}());



/***/ }),

/***/ "./src/app/services/categories.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesService = /** @class */ (function () {
    function CategoriesService(http) {
        this.http = http;
    }
    CategoriesService.prototype.getCategories = function () {
        return this.http.get('../../assets/categories.json');
    };
    CategoriesService.prototype.getProducts = function () {
        return this.http.get('../../assets/products.json');
    };
    CategoriesService.prototype.getParameters = function () {
        return this.http.get('../../assets/parameters.json');
    };
    CategoriesService.prototype.getComments = function () {
        return this.http.get('../../assets/comments.json');
    };
    CategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Pawel\Desktop\Firmy\Sellions\zadanie\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
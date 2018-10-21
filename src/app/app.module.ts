import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';

import { CategoriesTableComponent } from './components/categories-table/categories-table.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

// Services
import { CategoriesService } from './services/categories.service';

// Routes
const appRoutes: Routes = [
  {path: '', component: CategoriesTableComponent},
  {path: 'category/:id', component: ProductsTableComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesTableComponent,
    ProductsTableComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CategoriesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ProductComponent } from './components/product/product.component';

import {NgxPhotoEditorModule} from "ngx-photo-editor";

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgxPhotoEditorModule,
  ]
})
export class ProductModule { }

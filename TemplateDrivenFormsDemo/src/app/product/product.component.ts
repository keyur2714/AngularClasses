import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // productName:string = "";
  // productPrice:number=0;

  isSubmitted = false;
  newProduct : Product = new Product();

  @ViewChild("p")
  productForm:NgForm;

  constructor() { }

  ngOnInit() {
  }

  saveProduct(){
    this.isSubmitted = true;
    console.log(this.productForm);
    console.log(this.productForm.value);
    console.log(this.productForm.controls['name'].valid);
    console.log(this.newProduct.productName);
    console.log(this.newProduct.productPrice);
  }
}

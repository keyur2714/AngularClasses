import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { LoggerService } from '../logging.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  isSubmitted:boolean=false;
  newProduct : Product = new Product();

  constructor(private loggerService : LoggerService ) { }

  ngOnInit() {
  }

  saveProduct(){
    this.loggerService.log("Inside Product Save Method: ");
    this.isSubmitted=true;
    console.log(this.newProduct.code);
    console.log(this.newProduct.name);
    console.log(this.newProduct.description);
    console.log(this.newProduct.unitPrice);
  }

}

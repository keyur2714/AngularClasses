import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

   @ViewChild("f")
   f:NgForm;

   isSubmitted:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(){
    console.log(this.f);
    console.log(this.f.value);
    console.log(this.f.controls["name"].value);
    console.log(this.f.controls["name"].invalid);
    this.isSubmitted = true;
  }
}

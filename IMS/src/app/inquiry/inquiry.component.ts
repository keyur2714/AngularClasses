import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  name:string = "keyur";
  mobileNo:string = "7387029671";
  email:string="keyurjava27@gmail.com";
  course:string="Angular";

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from './contact.model';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:Contact = new Contact();

  @ViewChild("f")
  frm : NgForm;

  constructor() { }

  ngOnInit() {
    this.contact.name = "denish";
  }
 
  saveContact(){
    console.log(this.frm);
    console.log(this.frm.value);
    console.log(this.frm.controls['name'].value);
    console.log(this.frm.controls['mobileNo'].value);
    console.log(this.frm.controls['email'].value);
    console.log(this.contact.name);
  }
}

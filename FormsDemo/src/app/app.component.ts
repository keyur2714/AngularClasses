import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild("f")
  frm : NgForm;

  // onSubmitForm(frm : NgForm){
  //   console.log(frm);
  //   console.log(frm.value);
  //   console.log(frm.controls['name'].value);
  //   console.log(frm.controls['city'].value);
  // }

  onSubmitForm(){
    console.log(this.frm);
    console.log(this.frm.value);
    console.log(this.frm.controls['name'].value);
    console.log(this.frm.controls['city'].value);
  }

}

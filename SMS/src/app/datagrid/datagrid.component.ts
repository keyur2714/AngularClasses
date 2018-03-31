import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {

  @Input()
  headerColumns : string[] = ["Name","City"];
  @Input()
  displayColumns : string[] = ["name","city"];
  @Input()
  dataList: any[] = [
    {
      name:"keyur",
      city:"Navsari"
    },
    {
      name:"denish",
      city:"surat"      
    }
];
  constructor() { }

  ngOnInit() {
  }

}

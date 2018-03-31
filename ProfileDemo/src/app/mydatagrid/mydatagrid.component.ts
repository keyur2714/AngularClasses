import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mydatagrid',
  templateUrl: './mydatagrid.component.html',
  styleUrls: ['./mydatagrid.component.css']
})
export class MydatagridComponent implements OnInit {

  @Input()
  columnList:string[] = ["name","city"];
  @Input()
  dataList:any[]=[
    {
      "name":"keyur",
      "city":"surat"
    },
    {
      "name":"denish",
      "city":"mumbai"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

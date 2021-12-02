import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-organigrama',
  templateUrl: './organigrama.component.html',
  styleUrls: ['./organigrama.component.css']
})
export class OrganigramaComponent implements OnInit {

  @Input() data:any;
  
  constructor() { }

  ngOnInit() {
  }

}

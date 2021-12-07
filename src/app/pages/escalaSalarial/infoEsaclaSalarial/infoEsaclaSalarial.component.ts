import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infoEsaclaSalarial',
  templateUrl: './infoEsaclaSalarial.component.html',
  styleUrls: ['./infoEsaclaSalarial.component.css']
})
export class InfoEsaclaSalarialComponent implements OnInit {

  @Input() data:any;

  constructor(private router :Router) { }

  ngOnInit() {
  }

  goToModificarEsaclaSalarial() : void{
    this.router.navigate(['pages/escalaSalarial/modificarEscalaSalarial'], this.data);
  }

  goToModificarsueldo() : void{
    this.router.navigate(['pages/escalaSalarial/modificarSueldo'], this.data);
  }

}

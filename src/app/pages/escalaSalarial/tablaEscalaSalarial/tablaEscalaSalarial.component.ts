import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablaEscalaSalarial',
  templateUrl: './tablaEscalaSalarial.component.html',
  styleUrls: ['./tablaEscalaSalarial.component.css']
})
export class TablaEscalaSalarialComponent implements OnInit {

  @Input() data:any;

  constructor(private router :Router) { }

  ngOnInit() {
  }

  goToInfoEscalaSalarial(): void{
    this.router.navigate(['pages/escalaSalarial/informacionEscalaSalarial']);
  }

  goToReporteEscalaSalarial() : void{
    this.router.navigate(['pages/escalaSalarial/reporteEscalaSalarial']);
  }

  goToCrearEscalaSalarial() : void{
    this.router.navigate(['pages/escalaSalarial/crearEscalaSalarial']);
  }

}

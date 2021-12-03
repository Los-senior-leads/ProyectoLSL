import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablaEdificios',
  templateUrl: './tablaEdificios.component.html',
  styleUrls: ['./tablaEdificios.component.css']
})
export class TablaEdificiosComponent implements OnInit {

  @Input() data:any;

  constructor(private router :Router) { }

  ngOnInit() {
  }

  goToCrearEdificio() : void{
    this.router.navigate(['pages/edificios/crearEdificio']);
  }

  goToReporteEdificio() : void{
    this.router.navigate(['pages/edificios/reporteEdificios']);
  }
  
  /* Para el paso de parametros en el momento de la navegacion, usar el input data.codigo*/ 
  goToInfoEdificio() : void{
    this.router.navigate(['pages/edificios/informacionEdificio'], this.data);
  }

}

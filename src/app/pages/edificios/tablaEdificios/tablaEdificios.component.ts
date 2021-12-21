import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Edificio } from '../edificio';
import { TablaEdificiosService } from './tabla-edificios.service';

@Component({
  selector: 'app-tablaEdificios',
  templateUrl: './tablaEdificios.component.html',
  styleUrls: ['./tablaEdificios.component.css']
})
export class TablaEdificiosComponent implements OnInit {

  edificios: Edificio[] = [];

  constructor(private router :Router, private tablaEdificiosService: TablaEdificiosService) { }

  ngOnInit() {
    this.getEdificios();
  }

  getEdificios(): void {
    this.tablaEdificiosService.getEdificios()
      .subscribe(edificios => (this.edificios = edificios))
  }

  goToCrearEdificio() : void{
    this.router.navigate(['pages/edificios/crearEdificio']);
  }

  goToReporteEdificio() : void{
    this.router.navigate(['pages/edificios/reporteEdificios']);
  }
  
  /* Para el paso de parametros en el momento de la navegacion, usar el input data.codigo*/ 
  goToInfoEdificio(id: number) : void{
    this.router.navigate(['pages/edificios/informacionEdificio', id]);
  }

}

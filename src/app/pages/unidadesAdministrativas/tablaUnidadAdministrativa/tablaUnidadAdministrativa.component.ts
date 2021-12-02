import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablaUnidadAdministrativa',
  templateUrl: './tablaUnidadAdministrativa.component.html',
  styleUrls: ['./tablaUnidadAdministrativa.component.css']
})
export class TablaUnidadAdministrativaComponent implements OnInit {

  @Input() data:any;
  
  constructor(private router :Router) { }

  ngOnInit() {
  }

  goToCrearEmpresa() : void{
    this.router.navigate(['pages/unidadesAdministrativas/crearUnidadAdministrativa']);
  }

  goToReporteEmpresa() : void{
    this.router.navigate(['pages/unidadesAdministrativas/reporteEmpresas']);
  }
  
  /* Para el paso de parametros en el momento de la navegacion, usar el input data.codigo*/ 
  goToInfoEmpresa() : void{
    this.router.navigate(['pages/unidadesAdministrativas/informacionUnidadAdministrativa'], this.data);
  }

}

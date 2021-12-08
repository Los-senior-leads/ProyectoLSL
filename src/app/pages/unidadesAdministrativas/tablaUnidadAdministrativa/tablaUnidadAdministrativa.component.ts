import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from '../empresa';
import { TablaUnidadAdministrativaService } from './tabla-unidad-administrativa.service'; 

@Component({
  selector: 'app-tablaUnidadAdministrativa',
  templateUrl: './tablaUnidadAdministrativa.component.html',
  providers: [TablaUnidadAdministrativaService],
  styleUrls: ['./tablaUnidadAdministrativa.component.css']
})

export class TablaUnidadAdministrativaComponent implements OnInit {

  empresas: Empresa[] = [];
  
  constructor(private router: Router, private tablaUnidadAdministrativa: TablaUnidadAdministrativaService) { }
  
  ngOnInit() {
    this.getEmpresas();
  }

  goToEdificios() : void {
    this.router.navigate(['edificios'])
  }

  getEmpresas(): void {
    this.tablaUnidadAdministrativa.getEmpresas()
      .subscribe(empresas => (this.empresas = empresas))
  }

  goToCrearEmpresa() : void{
    this.router.navigate(['pages/unidadesAdministrativas/crearUnidadAdministrativa']);
  }

  goToReporteEmpresa() : void{
    this.router.navigate(['pages/unidadesAdministrativas/reporteEmpresas']);
  }
  
  /* Para el paso de parametros en el momento de la navegacion, usar el input data.codigo*/ 
  goToInfoEmpresa(id: number) : void{
    this.router.navigate(['pages/unidadesAdministrativas/informacionUnidadAdministrativa',id]);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from './empresa';
import { UnidadesAdministrativasService } from './unidades-administrativas.service';

@Component({
  selector: 'app-unidadesAdministrativasUser',
  templateUrl: './unidadesAdministrativasUser.component.html',
  providers: [UnidadesAdministrativasService],
  styleUrls: ['./unidadesAdministrativasUser.component.css']
})
export class UnidadesAdministrativasUserComponent implements OnInit {

  empresas: Empresa[] = [];
  
  constructor(private router: Router, private tablaUnidadAdministrativa: UnidadesAdministrativasService) { }
  
  ngOnInit() {
    this.getEmpresas();
  }

  getEmpresas(): void {
    this.tablaUnidadAdministrativa.getEmpresas()
      .subscribe(empresas => (this.empresas = empresas))
  }

  goToEdificios() : void {
    this.router.navigate(['edificios'])
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

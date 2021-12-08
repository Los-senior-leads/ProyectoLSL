import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infoEmpresa',
  templateUrl: './infoEmpresa.component.html',
  styleUrls: ['./infoEmpresa.component.css']
})
export class InfoEmpresaComponent implements OnInit {

  @Input() id: any;

  constructor(private router :Router) { }
  

  ngOnInit() {
  }

  goToBajaEmpresa() : void{
    this.router.navigate(['pages/unidadesAdministrativas/altaUnidadAdministrativa']);
  }

  goToAltaEmpresa() : void{
    this.router.navigate(['pages/unidadesAdministrativas/bajaUnidadAdministrativa']);
  }

  goToRevertirEmpresa() : void{
    this.router.navigate(['pages/unidadesAdministrativas/revertirUnidadAdministrativa']);
  }

  goToModificarEmpresa() : void{
    this.router.navigate(['pages/unidadesAdministrativas/modificarUnidadAdministrativa']);
  }


}

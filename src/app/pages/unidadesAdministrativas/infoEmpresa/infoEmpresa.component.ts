import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infoEmpresa',
  templateUrl: './infoEmpresa.component.html',
  styleUrls: ['./infoEmpresa.component.css']
})
export class InfoEmpresaComponent implements OnInit {

  @Input() data:any;

  constructor(private router :Router) { }
  

  ngOnInit() {
  }

  goToBajaEmpresa() : void{
    this.router.navigate(['pages/unidadesAdministrativas/altaUnidadAdministrativa'], this.data);
  }

  goToAltaEmpresa() : void{
    this.router.navigate(['pages/unidadesAdministrativas/bajaUnidadAdministrativa'], this.data);
  }

  goToRevertirEmpresa() : void{
    this.router.navigate(['pages/unidadesAdministrativas/revertirUnidadAdministrativa'], this.data);
  }

  goToModificarEmpresa() : void{
    this.router.navigate(['pages/unidadesAdministrativas/modificarUnidadAdministrativa'], this.data);
  }


}

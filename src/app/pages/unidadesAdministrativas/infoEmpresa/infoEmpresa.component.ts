import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from '../empresa';
import { InfoEmpresaService } from './info-empresa.service';

@Component({
  selector: 'app-infoEmpresa',
  templateUrl: './infoEmpresa.component.html',
  providers: [ InfoEmpresaService ],
  styleUrls: ['./infoEmpresa.component.css']
})
export class InfoEmpresaComponent implements OnInit {

  empresa: Empresa | undefined;
  idnumber: number = this.router.url.lastIndexOf('/') + 1
  id: String = this.router.url.charAt(this.idnumber)
  constructor(private router :Router, private infoEmpresaService: InfoEmpresaService) { }
  

  ngOnInit() {
    this.getEmpresa();
  }

  getEmpresa(): void {
    this.infoEmpresaService.getEmpresa(this.id)
      .subscribe(empresa => (this.empresa = empresa))
  }



  goToBajaEmpresa() : void{
    this.router.navigate(['pages/unidadesAdministrativas/altaUnidadAdministrativa/'+this.id]);
  }

  goToAltaEmpresa() : void{
    this.router.navigate(['pages/unidadesAdministrativas/bajaUnidadAdministrativa/'+this.id]);
  }

  goToRevertirEmpresa() : void{
    this.router.navigate(['pages/unidadesAdministrativas/revertirUnidadAdministrativa/'+this.id]);
  }

  goToModificarEmpresa() : void{
    this.router.navigate(['pages/unidadesAdministrativas/modificarUnidadAdministrativa/'+this.id]);
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Edificio } from './edificio';
import { EdificioUserService } from './edificio-user.service';
@Component({
  selector: 'app-edificiosUser',
  templateUrl: './edificiosUser.component.html',
  styleUrls: ['./edificiosUser.component.css']
})
export class EdificiosUserComponent implements OnInit {

  edificios: Edificio[] = [];

  constructor(private router :Router, private tablaEdificiosService: EdificioUserService) { }

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

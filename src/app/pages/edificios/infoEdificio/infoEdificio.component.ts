import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infoEdificio',
  templateUrl: './infoEdificio.component.html',
  styleUrls: ['./infoEdificio.component.css']
})
export class InfoEdificioComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  goToAltaEdificio() : void{
    this.router.navigate(['pages/edificios/altaEdificio']);
  }

  goToBajaEdificio() : void{
    this.router.navigate(['pages/edificios/bajaEdificio']);
  }

  goToCambiarCodigoEdificio() : void{
    this.router.navigate(['pages/edificios/cambiarCodigoEdificio']);
  }

  goToModificarEdificio() : void{
    this.router.navigate(['pages/edificios/modificarEdificio']);
  }

  goToRevertirEdificio() : void{
    this.router.navigate(['pages/edificios/revertirEdificio']);
  }

  goToMapaEdificio() : void{
    this.router.navigate(['pages/edificios/mapaEdificio']);
  }


}

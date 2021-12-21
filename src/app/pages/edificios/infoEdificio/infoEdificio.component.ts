import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Edificio } from '../edificio';
import { InfoEdificioService } from './info-edificio.service';

@Component({
  selector: 'app-infoEdificio',
  templateUrl: './infoEdificio.component.html',
  providers: [ InfoEdificioService],
  styleUrls: ['./infoEdificio.component.css']
})
export class InfoEdificioComponent implements OnInit {

  edificio: Edificio | undefined;
  idnumber: number = this.router.url.lastIndexOf('/') + 1
  id: String = this.router.url.charAt(this.idnumber)
  constructor(private router :Router, private infoEdificioService: InfoEdificioService) { }

  ngOnInit() {
    this.getEdificio();
  }

  getEdificio(): void {
    this.infoEdificioService.getEdificio(this.id)
      .subscribe(edificio => (this.edificio = edificio))
  }

  goToAltaEdificio() : void{
    this.router.navigate(['pages/edificios/altaEdificio'+this.id]);
  }

  goToBajaEdificio() : void{
    this.router.navigate(['pages/edificios/bajaEdificio'+this.id]);
  }

  goToCambiarCodigoEdificio() : void{
    this.router.navigate(['pages/edificios/cambiarCodigoEdificio'+this.id]);
  }

  goToModificarEdificio() : void{
    this.router.navigate(['pages/edificios/modificarEdificio'+this.id]);
  }

  goToRevertirEdificio() : void{
    this.router.navigate(['pages/edificios/revertirEdificio'+this.id]);
  }

  goToMapaEdificio() : void{
    this.router.navigate(['pages/edificios/mapaEdificio'+this.id]);
  }


}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Escala } from '../escala';
import { TablaEscalaService } from './tabla-escala.service';

@Component({
  selector: 'app-tablaEscalaSalarial',
  templateUrl: './tablaEscalaSalarial.component.html',
  styleUrls: ['./tablaEscalaSalarial.component.css']
})
export class TablaEscalaSalarialComponent implements OnInit {

  escalas: Escala[] = [];

  constructor(private router :Router,
    private tablaEscalasService: TablaEscalaService) { }

  ngOnInit() {
    this.getEscalas();
  }

  getEscalas(): void {
    this.tablaEscalasService.getEscalas()
      .subscribe(escalas => (this.escalas = escalas))
  }  

  goToInfoEscalaSalarial(id: number): void{
    this.router.navigate(['pages/escalaSalarial/informacionEscalaSalarial', id]);
  }

  goToReporteEscalaSalarial() : void{
    this.router.navigate(['pages/escalaSalarial/reporteEscalaSalarial']);
  }

  goToCrearEscalaSalarial() : void{
    this.router.navigate(['pages/escalaSalarial/crearEscalaSalarial']);
  }

}

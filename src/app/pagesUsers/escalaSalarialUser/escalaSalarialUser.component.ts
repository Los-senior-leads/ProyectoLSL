import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Escala } from './escala';
import { EscalaSalarialService } from './escala-salarial.service';

@Component({
  selector: 'app-escalaSalarialUser',
  templateUrl: './escalaSalarialUser.component.html',
  styleUrls: ['./escalaSalarialUser.component.css']
})
export class EscalaSalarialUserComponent implements OnInit {

  escalas: Escala[] = [];

  constructor(private router :Router,
    private tablaEscalasService: EscalaSalarialService) { }

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

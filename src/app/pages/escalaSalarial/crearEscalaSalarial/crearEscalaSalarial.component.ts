import { Component, OnInit } from '@angular/core';
import { Escala } from '../escala';
import { CrearEscalaService } from './crear-escala.service';

@Component({
  selector: 'app-crearEscalaSalarial',
  templateUrl: './crearEscalaSalarial.component.html',
  styleUrls: ['./crearEscalaSalarial.component.css']
})
export class CrearEscalaSalarialComponent implements OnInit {

  escalas: Escala[] = []
  editEscala: Escala | undefined;
  constructor(private crearEscalaService: CrearEscalaService) { }

  ngOnInit() {
  }

  add(id : string, categoria : string, sub : string,
    clase : string, descripcion : string, estado : string,
    nivel_salarial : string, nombre_puesto : string,
    haber_basico : string, ni : string,
    cm : string, ca : string, fecha_aprobacion : string,
    fecha_cierre : string): void {

      this.editEscala = undefined;
      let id_empresa = parseInt(id);
      categoria = categoria.trim();
      let sub_categoria = parseInt(sub);
      clase = clase.trim();
      descripcion = descripcion.trim();
      estado = estado.trim();
      nivel_salarial = nivel_salarial.trim();
      nombre_puesto = nombre_puesto.trim();
      haber_basico = haber_basico.trim();
      let numero_items = parseInt(ni);
      let costo_mensual = parseInt(cm);
      let costo_anual = parseInt(ca);
      fecha_aprobacion = fecha_aprobacion.trim();
      fecha_cierre = fecha_cierre.trim()
      const newEscala: Escala = {id_empresa, categoria,
      sub_categoria, clase, descripcion, estado, nivel_salarial,
      nombre_puesto, haber_basico, numero_items, costo_mensual,
      costo_anual, fecha_aprobacion, fecha_cierre} as Escala;
      this.crearEscalaService
        .addEscala(newEscala)
        .subscribe(escala => this.escalas.push(escala)
        );
    }

}

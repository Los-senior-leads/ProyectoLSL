import { Component, OnInit } from '@angular/core';
import { Edificio } from '../edificio';
import { CrearEdificioService } from './crear-edificio.service';

@Component({
  selector: 'app-crearEdificio',
  templateUrl: './crearEdificio.component.html',
  styleUrls: ['./crearEdificio.component.css']
})
export class CrearEdificioComponent implements OnInit {

  edificios: Edificio[] = []
  editEdificio: Edificio | undefined;

  constructor(private crearEdificioService: CrearEdificioService) { }

  ngOnInit() {
  }

  add(nombre: String, id_empresa: String, coordenadas: String, 
    tipo: String, direccion: String, distrito: String, 
    estado: String, cantidad_mujeres: string, cantidad_hombres: string): void {

    this.editEdificio = undefined;
    nombre = nombre.trim();
    id_empresa = id_empresa.trim();
    coordenadas = coordenadas.trim();
    tipo = tipo.trim();
    direccion = direccion.trim();
    distrito = distrito.trim();
    estado = estado.trim();
    let cantidad_personas = parseInt(cantidad_hombres)+parseInt(cantidad_mujeres);
    const newEdificio: Edificio = { nombre, id_empresa, coordenadas, tipo, direccion, 
      distrito, estado, cantidad_personas } as Edificio;
    this.crearEdificioService
      .addEdificio(newEdificio)
      .subscribe(empresa => this.edificios.push(empresa)
      );
  }

}

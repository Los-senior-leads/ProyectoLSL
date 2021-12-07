import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa';
import { CrearEmpresaService } from './crear-empresa.service';

@Component({
  selector: 'app-crearEmpresa',
  templateUrl: './crearEmpresa.component.html',
  styleUrls: ['./crearEmpresa.component.css']
})
export class CrearEmpresaComponent implements OnInit {

  empresas: Empresa[] = []
  editEmpresa: Empresa | undefined;

  constructor(private crearEmpresaService: CrearEmpresaService) { }

  ngOnInit() {
  }

  add(nombre: String, fecha_creacion: String, fecha_cierre: String, descripcion: String, funciones: String, estado: String): void {

    this.editEmpresa = undefined;
    nombre = nombre.trim();
    fecha_creacion = fecha_creacion.trim();
    fecha_cierre = fecha_cierre.trim();
    descripcion = descripcion.trim();
    funciones = funciones.trim();
    estado = estado.trim();
    console.log(estado)
    const newEmpresa: Empresa = { nombre, fecha_creacion, fecha_cierre, descripcion, funciones, estado } as Empresa;
    this.crearEmpresaService
      .addEmpresa(newEmpresa)
      .subscribe(empresa => this.empresas.push(empresa)
      );
  }

}

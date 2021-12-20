import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../usuarios';
import { TablaUsuariosService } from './tabla-usuarios.service';
import { TablaUsuariosModule } from './tablaUsuarios.module';

@Component({
  selector: 'app-tablaUsuarios',
  templateUrl: './tablaUsuarios.component.html',
  providers: [TablaUsuariosService],
  styleUrls: ['./tablaUsuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  usuarios: Usuarios[] = [];

  constructor(private router: Router, private tablaUsuariosService: TablaUsuariosService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.tablaUsuariosService.getUsuarios()
      .subscribe(usuarios => (this.usuarios = usuarios))
  }

  goToCrearUsuario() : void{
    this.router.navigate(['pagesSuperUser/crearUsuario']);
  }

  goToInfoUsuaio(id: number) : void{
    this.router.navigate(['pagesSuperUser/infoUsuario',id]);
  }

}

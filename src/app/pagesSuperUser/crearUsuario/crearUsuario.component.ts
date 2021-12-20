import { Component, OnInit } from '@angular/core';

import { Usuarios } from '../usuarios';
import { CrearUsuarioService } from './crear-usuario.service';

@Component({
  selector: 'app-crearUsuario',
  templateUrl: './crearUsuario.component.html',
  styleUrls: ['./crearUsuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuarios: Usuarios[] = []
  editUsuario: Usuarios | undefined;

  constructor(private crearUsuarioService: CrearUsuarioService) { }

  ngOnInit() {
  }

  add(nombre: String, contrasena: String, rol: String): void {

    this.editUsuario = undefined;
    nombre = nombre.trim();
    contrasena = contrasena.trim();
    rol = rol.trim();
    console.log(rol)
    const newUsuario: Usuarios = { nombre, contrasena, rol } as Usuarios;
    this.crearUsuarioService
      .addUsuario(newUsuario)
      .subscribe(usuario => this.usuarios.push(usuario)
      );
  }

}

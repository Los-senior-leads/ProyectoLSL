import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuarios } from '../usuarios';
import { ModificarUsuarioService} from './modificar-usuario.service';

@Component({
  selector: 'app-modificarUsuario',
  templateUrl: './modificarUsuario.component.html',
  providers: [ModificarUsuarioService],
  styleUrls: ['./modificarUsuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  idnumber: number = this.router.url.lastIndexOf('/') + 1
  id: String = this.router.url.charAt(this.idnumber)
  usuarios: Usuarios | undefined;

  constructor(private router: Router, private modificarUsuarioService: ModificarUsuarioService) { }

  ngOnInit() {
    this.getUsuario()
  }

  getUsuario(): void {
    this.modificarUsuarioService.getUsuario(this.id)
      .subscribe(usuario => (this.usuarios = usuario))
  }

  edit(contrasena: String, rol: String): void {
      console.log(this.usuarios)
      if(this.usuarios){
        this.usuarios.contrasena=contrasena;
        this.usuarios.rol=rol;
        this.updateUsuario()
      }
      
  }

  updateUsuario(): void {
    if(this.usuarios)
    this.modificarUsuarioService.updateUsuario(this.id, this.usuarios)
      .subscribe(usuario => (this.usuarios = usuario))
  }

}

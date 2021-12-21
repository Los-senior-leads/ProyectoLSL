import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuarios } from '../usuarios';
import { InfoUsuarioService } from './info-usuario.service';

@Component({
  selector: 'app-infoUsuario',
  templateUrl: './infoUsuario.component.html',
  providers: [ InfoUsuarioService ],
  styleUrls: ['./infoUsuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {

  usuarios: Usuarios | undefined;
  idnumber: number = this.router.url.lastIndexOf('/') + 1
  id: String = this.router.url.charAt(this.idnumber)

  constructor(private router :Router, private infoUsuarioService: InfoUsuarioService) { }

  ngOnInit() {
    this.getUsuario();
  }

  getUsuario(): void {
    this.infoUsuarioService.getUsuario(this.id)
      .subscribe(usuario => (this.usuarios = usuario))
  }

  goEliminarUsuario(): void{
    this.router.navigate(['pagesSuperUser/eliminarUsuario/'+this.id]);
  }

  goModificarUsuario(): void{
    this.router.navigate(['pagesSuperUser/modificarUsuario/'+this.id]);
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../usuarios';
import { EliminarUsuarioService} from './eliminar-usuario.service';


@Component({
  selector: 'app-eliminarUsuario',
  templateUrl: './eliminarUsuario.component.html',
  providers: [EliminarUsuarioService],
  styleUrls: ['./eliminarUsuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {

  idnumber: number = this.router.url.lastIndexOf('/') + 1
  id: String = this.router.url.charAt(this.idnumber)
  usuarios: Usuarios | undefined;

  constructor(private router: Router, private eliminarUsuarioService: EliminarUsuarioService) { }

  ngOnInit() {
    this.getUsuario()
  }

  getUsuario(): void {
    this.eliminarUsuarioService.getEmpresa(this.id)
      .subscribe(usuario => (this.usuarios = usuario))
  }

  delete() : void{
    this.eliminarUsuarioService
    .deleteUsuario(this.id)
    .subscribe(usuario => (this.usuarios = usuario));
  }

}

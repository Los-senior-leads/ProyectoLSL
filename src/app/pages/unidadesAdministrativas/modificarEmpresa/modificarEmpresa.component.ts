import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from '../empresa';
import { ModificarEmpresaService} from './modificar-empresa.service';

@Component({
  selector: 'app-modificarEmpresa',
  templateUrl: './modificarEmpresa.component.html',
  providers: [ModificarEmpresaService],
  styleUrls: ['./modificarEmpresa.component.css']
})
export class ModificarEmpresaComponent implements OnInit {

  idnumber: number = this.router.url.lastIndexOf('/') + 1
  id: String = this.router.url.charAt(this.idnumber)
  empresa: Empresa | undefined;

  constructor(private router: Router, private modificarEmpresaService: ModificarEmpresaService) { }

  ngOnInit() {
    this.getEmpresa()
  }

  getEmpresa(): void {
    this.modificarEmpresaService.getEmpresa(this.id)
      .subscribe(empresa => (this.empresa = empresa))
  }

  edit(nombre: String, funciones: String,
    fecha:String, docs: String): void {
      console.log(this.empresa)
      if(this.empresa){
        this.empresa.nombre=nombre;
        this.empresa.funciones=funciones;
        this.updateEmpresa()
      }
      
  }

  updateEmpresa(): void {
    if(this.empresa)
    this.modificarEmpresaService.updateEmpresa(this.id, this.empresa)
      .subscribe(empresa => (this.empresa = empresa))
  }

}

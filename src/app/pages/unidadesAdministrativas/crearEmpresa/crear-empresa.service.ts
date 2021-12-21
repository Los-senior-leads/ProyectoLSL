import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Empresa } from '../empresa';

@Injectable({
  providedIn: 'root'
})
export class CrearEmpresaService {

  empresaUrl = 'http://127.0.0.1:5000/empresas'

  constructor(private http: HttpClient) { }

  addEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.empresaUrl, empresa);
  }
}

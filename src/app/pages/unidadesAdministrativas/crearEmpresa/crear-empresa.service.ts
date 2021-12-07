import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Empresa } from '../empresa';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CrearEmpresaService {

  empresaUrl = 'http://127.0.0.1:5000/empresas/crear'

  constructor(private http: HttpClient) { }

  addEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.empresaUrl, empresa);
  }
}

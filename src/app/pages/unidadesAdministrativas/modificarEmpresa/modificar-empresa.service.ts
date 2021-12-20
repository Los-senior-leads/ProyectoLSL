import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Empresa } from '../empresa';

@Injectable({
  providedIn: 'root'
})
export class ModificarEmpresaService {

  empresaUrl = 'http://127.0.0.1:5000/empresas/'

  constructor(private http: HttpClient) { }

  updateEmpresa(id: String, empresa:Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(this.empresaUrl+id, empresa)
  }

  getEmpresa(id: String): Observable<Empresa> {
    return this.http.get<Empresa>(this.empresaUrl+id)
  }
}

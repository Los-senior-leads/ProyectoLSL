import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Usuarios } from '../usuarios';

@Injectable({
  providedIn: 'root'
})
export class TablaUsuariosService {

  usuarioUrl = 'http://127.0.0.1:5000/usuarios'

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.usuarioUrl);
  }
}

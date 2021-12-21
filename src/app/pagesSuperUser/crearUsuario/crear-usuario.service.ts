import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Usuarios } from '../usuarios';
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
export class CrearUsuarioService {

  usuarioUrl = 'http://127.0.0.1:5000/usuarios'

  constructor(private http: HttpClient) { }

  addUsuario(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.usuarioUrl, usuario);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Escala } from '../escala';

@Injectable({
  providedIn: 'root'
})
export class CrearEscalaService {

  escalaUrl = 'http://127.0.0.1:5000/escalas'

  constructor(private http: HttpClient) { }

  addEscala(escala: Escala): Observable<Escala> {
    return this.http.post<Escala>(this.escalaUrl, escala);
  }
}

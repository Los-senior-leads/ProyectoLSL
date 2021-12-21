import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Edificio } from '../edificio';

@Injectable({
  providedIn: 'root'
})
export class CrearEdificioService {

  edificioUrl = 'http://127.0.0.1:5000/edificios'

  constructor(private http: HttpClient) { }
  addEdificio(edificio: Edificio): Observable<Edificio> {
    return this.http.post<Edificio>(this.edificioUrl, edificio);
  }
}

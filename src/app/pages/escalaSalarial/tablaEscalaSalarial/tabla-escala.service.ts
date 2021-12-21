import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escala } from '../escala'

@Injectable({
  providedIn: 'root'
})

export class TablaEscalaService {

  escalaUrl = 'http://127.0.0.1:5000/escalas'
  
  constructor(private http: HttpClient) { }

  getEscalas(): Observable<Escala[]> {
    return this.http.get<Escala[]>(this.escalaUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Edificio } from './edificio';


@Injectable({
  providedIn: 'root'
})
export class EdificioUserService {

  edificioUrl = 'http://127.0.0.1:5000/edificios'

  constructor(private http: HttpClient) { }

  getEdificios(): Observable<Edificio[]> {
    return this.http.get<Edificio[]>(this.edificioUrl);
  }
}

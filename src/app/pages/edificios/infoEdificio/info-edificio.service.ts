import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Edificio } from '../edificio';

@Injectable({
  providedIn: 'root'
})
export class InfoEdificioService {

  edificioUrl = 'http://127.0.0.1:5000/edificios/'

  constructor(private http: HttpClient) { }

  getEdificio(id: String): Observable<Edificio> {
    return this.http.get<Edificio>(this.edificioUrl+id)
  }
}

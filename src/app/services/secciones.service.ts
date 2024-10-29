import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seccion } from '../models/seccion';

@Injectable({
  providedIn: 'root'
})
export class SeccionesService {
  private apiUrl = "http://localhost:8080/api/secciones"
  constructor(private http:HttpClient) { }

  getSeccion():Observable<Seccion[]>{
    return this.http.get<Seccion[]>(`${this.apiUrl}`);
  }

  crearSeccion(seccion: Seccion):Observable<Seccion>{
    return this.http.post<Seccion>(this.apiUrl, seccion);
  }

  getSeccionById(idSeccion: number):Observable<Seccion>{
    return this.http.get<Seccion>(`${this.apiUrl}/${idSeccion}`);
  }

  actualizarSeccion(seccion: Seccion):Observable<Seccion>{
    return this.http.put<Seccion>(this.apiUrl, seccion);
  }

  deleteSeccion(idSeccion: number){
    return this.http.delete(`${this.apiUrl}/${idSeccion}`);
  }
}

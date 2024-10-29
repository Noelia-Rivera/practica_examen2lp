import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acceso } from '../models/acceso';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {
  private apiUrl = "http://localhost:8080/api/accesos"
  constructor(private http:HttpClient) { }

  getAccesos():Observable<Acceso[]>{
    return this.http.get<Acceso[]>(`${this.apiUrl}`);
  }

  crearAcceso(acceso: Acceso):Observable<Acceso>{
    return this.http.post<Acceso>(this.apiUrl, acceso);
  }

  getAccesoById(idAcceso: number):Observable<Acceso>{
    return this.http.get<Acceso>(`${this.apiUrl}/${idAcceso}`);
  }

  actualizarAcceso(acceso: Acceso):Observable<Acceso>{
    return this.http.put<Acceso>(this.apiUrl, acceso);
  }

  deleteAcceso(idAcceso: number){
    return this.http.delete(`${this.apiUrl}/${idAcceso}`);
  }
}
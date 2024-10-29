import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private apiUrl = "http://localhost:8080/api/roles"
  constructor(private http:HttpClient) { }

  getRol():Observable<Rol[]>{
    return this.http.get<Rol[]>(`${this.apiUrl}`);
  }

  crearRol(rol: Rol):Observable<Rol>{
    return this.http.post<Rol>(this.apiUrl, rol);
  }

  getRolById(idRol: number):Observable<Rol>{
    return this.http.get<Rol>(`${this.apiUrl}/${idRol}`);
  }

  actualizarRol(rol: Rol):Observable<Rol>{
    return this.http.put<Rol>(this.apiUrl, rol);
  }

  deleteRol(idRol: number){
    return this.http.delete(`${this.apiUrl}/${idRol}`);
  }
}
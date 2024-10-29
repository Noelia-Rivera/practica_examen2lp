import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = "http://localhost:8080/api/empleados"
  constructor(private http:HttpClient) { }

  getEmpleados():Observable<Empleado[]>{
    return this.http.get<Empleado[]>(`${this.apiUrl}`);
  }

  crearEmpleado(empleado: Empleado):Observable<Empleado>{
    return this.http.post<Empleado>(this.apiUrl, empleado);
  }

  getEmpleadoById(idEmpleado: number):Observable<Empleado>{
    return this.http.get<Empleado>(`${this.apiUrl}/${idEmpleado}`);
  }

  actualizarEmpleado(empleado: Empleado):Observable<Empleado>{
    return this.http.put<Empleado>(this.apiUrl, empleado);
  }

  deleteEmpleado(idEmpleado: number){
    return this.http.delete(`${this.apiUrl}/${idEmpleado}`);
  }
}
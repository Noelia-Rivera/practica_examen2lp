import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Rol } from '../../models/rol';
import { RolService } from '../../services/rol.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rol',
  standalone: true,
  imports: [NavbarComponent, NgFor,FormsModule,NgIf,ReactiveFormsModule],
  templateUrl: './rol.component.html',
  styleUrl: './rol.component.css'
})
export class RolComponent {
  roles: Rol[] = [];
  isUpdate: boolean = false;
  formRol: FormGroup = new FormGroup({});
  mostrarTabla: boolean = true;

  cambiaVista(){
    this.mostrarTabla =!this.mostrarTabla;
  }

  constructor(
    private rolService: RolService 
  ){}

  ngOnInit(): void {
    this.listarRoles();
    this.formRol = new FormGroup({
      idRol: new FormControl(''),
      nombre: new FormControl(''),
      estado: new FormControl('')
    });
  }

  listarRoles(): void {
    this.rolService.getRol().subscribe((data: Rol[]) => {
      this.roles = data;
    },
    (error) => {
      console.error('Error', error);
      }
    );
  }

  crearRol(): void {
    const nuevoRol = {
      idRol: this.formRol.value.idRol,
      nombre: this.formRol.value.nombre,
      estado: this.formRol.value.estado
    } as any;
    this.rolService.crearRol(nuevoRol).subscribe({
      next: (resp) => {
        if (resp){
          Swal.fire({
            icon: 'success',
            title: 'Libro creado',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          this.listarRoles();
          this.formRol.reset();
        }
      },
      error: (err) => {
        console.error('Error', err);
      }
    });
  }

  resetFormRol(){
    this.formRol.reset();
  }

  selectRol(rol: any){
    this.isUpdate = true;
    this.formRol.controls['idRol'].setValue(rol.idRol);
    this.formRol.controls['nombre'].setValue(rol.nombre);
    this.formRol.controls['estado'].setValue(rol.estado);
  }

  actualizarRol(){
    const nuevoRol = {
      idRol: this.formRol.value.idRol,
      nombre: this.formRol.value.nombre,
      estado: this.formRol.value.estado
    }as any;
    this.rolService.actualizarRol(nuevoRol).subscribe({
      next: (resp) => {
        if (resp){
          Swal.fire({
            icon:'success',
            title: 'Rol Actualizado',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          this.listarRoles();
          this.formRol.reset();
        }
      },
      error: (err) => {
        console.error('Error', err);
      }
    });
  }

  eliminarRol(idRol: any){
    Swal.fire({
      title: "¿Estás seguro de borrar este libro?",
      text: "¡No serás capaz de reveritrlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#19e212",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borralo!"
    }).then((result) => {
      if (result.isConfirmed){
        Swal.fire({
          title: "¡Borrado!",
          text: "El dato ha sido borrado",
          icon: "success"
        });
        this.rolService.deleteRol(idRol).subscribe(resp=>{this.listarRoles();});
      }
    }
    )
  }
}

export class Empleado {
    idEmpleado: number;
    nombres: string;
    apellidos: string;
    documento: string;
    telefono: string;
    correo: string;
    estado: string;

    constructor(idEmpleado: number, nombres: string, apellidos: string, documento: string, telefono: string, correo: string, estado: string){
        this.idEmpleado = idEmpleado;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.documento = documento;
        this.telefono = telefono;
        this.correo = correo;
        this.estado = estado;
    }
}

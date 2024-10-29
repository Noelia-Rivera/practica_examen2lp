export class Rol {
    idRol: number;
    nombre: string;
    estado: string;

    constructor(idRol: number, nombre: string, estado: string){
        this.idRol = idRol;
        this.nombre = nombre;
        this.estado = estado;
    }
}

export class Editorial {
    idEditorial: number;
    nombre: string;
    estado: string;

    constructor(idEditorial: number, nombre: string, estado: string){
        this.idEditorial = idEditorial;
        this.nombre = nombre;
        this.estado = estado;
    }
}

export class Categoria {
    idCategoria: number;
    nombre: string;
    estado: string;

    constructor(idCategoria: number, nombre: string, estado: string){
        this.idCategoria = idCategoria;
        this.nombre = nombre;
        this.estado = estado;
    }
}

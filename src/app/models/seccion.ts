import { Categoria } from "./categoria";

export class Seccion {
    idSeccion: number;
    seccion: string;
    estado: string;
    categoria: Categoria;

    constructor(idSeccion: number, seccion: string, estado: string, categoria: Categoria){
        this.idSeccion = idSeccion;
        this.seccion = seccion;
        this.estado = estado;
        this.categoria = categoria;
    }
}

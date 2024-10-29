export class Autor {
    idAutor: number;
    nombres: string;
    apellidos: string;
    pais: string;
    estado: string;

    constructor(idAutor: number, nombres: string, apellidos: string, pais: string, estado:string){
        this.idAutor = idAutor;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.pais = pais;
        this.estado = estado;
    }
}

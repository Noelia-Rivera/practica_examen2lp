import { Acceso } from "./acceso";
import { Rol } from "./rol";

export class AccesoRol {
    idAccesoRol: number;
    idRol: Rol;
    idAcceso: Acceso;

    constructor(idAccesoRol: number, idRol: Rol, idAcceso: Acceso){
        this.idAccesoRol = idAccesoRol;
        this.idRol = idRol;
        this.idAcceso = idAcceso;
    }
}

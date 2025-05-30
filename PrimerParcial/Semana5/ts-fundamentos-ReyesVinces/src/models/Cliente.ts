//Punto 2: Creacion de interfaces
export interface Cliente {

    id: string;
    nombre: string;
    email: string;
    activo: boolean;
    telefono?: string; //Punto 6: Uso de tipos especiales

}

//Punto 3: Creacion de clases basadas en interfaces anteriores implementando constructor y un metodo en cada clase
export class ClienteClass implements Cliente{
    constructor(
        public id: string,
        public nombre: string,
        public email: string,
        public activo: boolean,
    ){}

    estaActivo(): string {
        return this.activo ? "El cliente está activo" : "El cliente no está activo";
    }
}
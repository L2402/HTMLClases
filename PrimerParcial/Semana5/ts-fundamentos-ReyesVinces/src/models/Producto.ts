//Punto 2: Creacion de interfaces
export interface Producto {
    id: string | number; //Punto 6: Uso de tipos especiales
    nombre: string;
    precio: number;
    stock: number;
    disponible: boolean;
    descripcion?: string; //Punto 6: Uso de tipos especiales
}

//Punto 3: Creacion de clases basadas en interfaces anteriores implementando constructor y un metodo en cada clase

export class ProductoClass implements Producto {
    constructor(
        public id: string | number, //Punto 6: Uso de tipos especiales
        public nombre: string,
        public precio: number,
        public stock: number,
        public disponible: boolean,
    ) {}

    validarStock(): boolean {
        return this.stock > 0;
    }

}
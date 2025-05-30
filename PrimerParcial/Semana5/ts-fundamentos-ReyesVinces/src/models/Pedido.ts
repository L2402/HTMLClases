import {Producto} from "./Producto";
import {Cliente} from "./Cliente";

//Punto 2: Creacion de interfaces
export interface pedido {

    id: number;
    cliente: Cliente;
    productos: Producto[];
    fecha: string;

}

//Punto 3: Creacion de clases basadas en interfaces anteriores implementando constructor y un metodo en cada clase
export class PedidoClass implements pedido {
  constructor(
    public id: number,
    public cliente: Cliente,
    public productos: Producto[],
    public fecha: string
  ) {}

  //Punto 9: Uso de reeduce
  total(): number {
    return this.productos.reduce((sum, p) => sum + p.precio, 0);
  }
}
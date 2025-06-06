// data.ts
export interface Cliente {
  id: number;
  nombre: string;
  correo: string;
}

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

export interface Pedido {
  id: number;
  clienteId: number;
  productoId: number;
}

export const clientes: Cliente[] = [
  { id: 1, nombre: "Alice", correo: "alice@gmail.com" },
  { id: 2, nombre: "Juan", correo: "juan@gmail.com" },
];

export const productos: Producto[] = [
  { id: 1, nombre: "Laptop", precio: 1500 },
  { id: 2, nombre: "Mouse", precio: 25 },
];

export const pedidos: Pedido[] = [
  { id: 1, clienteId: 1, productoId: 2 },
  { id: 2, clienteId: 2, productoId: 1 },
];

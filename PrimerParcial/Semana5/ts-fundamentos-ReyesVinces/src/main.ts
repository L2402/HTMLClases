import { productos, clientes } from './data/baseDatos';
import { PedidoClass } from './models/Pedido';


//Punto 5: Funciones tipadas
function mostrarProductos(): void {
    productos.forEach((p) => console.log(p));
}

//Punto 5: Funciones tipadas
//Punto 8: Uso de filter
function contarDisponibles(): number {
  return productos.filter((p) => p.disponible).length;
}

//Punto 5: Funciones tipadas
function insertarEliminarProducto(): void {
  productos.push({ id: 7, nombre: "Assassin's Creed Valhalla", precio: 59.99, stock: 20, disponible: true });
  productos.pop();
}

interface Categoria {
  readonly nombre: string;
}

// Uso simulado de la interface para evitar warning
const categoriaEjemplo: Categoria = { nombre: "Videojuegos" };
console.log("Categoría ejemplo:", categoriaEjemplo.nombre);

//Punto 7: Uso de map()
const nombresProductos = productos.map((p) => p.nombre);
console.log(nombresProductos);

//Punto 10: Simular relaciones entre entidades
const pedidoEjemplo = new PedidoClass(1, clientes[0], [productos[0], productos[1]], "2024-05-30");

//Punto 11: Simular una operacion de negocio
function resumenPedido(pedido: PedidoClass): void {
  console.log(`Cliente: ${pedido.cliente.nombre}`);
  pedido.productos.forEach((p) => console.log(`Producto: ${p.nombre} - $${p.precio}`));
}

//Punto 12: Imprimir estructuras anidadas
function mostrarPedidoCompleto(pedido: PedidoClass): void {
  console.log(JSON.stringify(pedido, null, 2));
}

//Punto 1: Variables con tipos primitivos
const nombreProducto: string = "CYyberpunk  2077";
const precio: number = 49.99;
const disponible: boolean = true;
const stock: number = 30;
const categoria: string = "RPG";

// Función main que usa todo lo que declaraste para que no quede dormido
function main() {
  console.log("=== Mostrar productos ===");
  mostrarProductos();

  console.log("\n=== Contar productos disponibles ===");
  console.log(`Hay ${contarDisponibles()} productos disponibles.`);

  console.log("\n=== Insertar y eliminar producto ===");
  insertarEliminarProducto();
  console.log("Productos después de insertar y eliminar:");
  mostrarProductos();

  console.log("\n=== Mostrar nombres de productos ===");
  console.log(nombresProductos);

  console.log("\n=== Resumen del pedido ===");
  resumenPedido(pedidoEjemplo);

  console.log("\n=== Pedido completo ===");
  mostrarPedidoCompleto(pedidoEjemplo);

  console.log("\n=== Detalle de variables primitivas ===");
  console.log(`Nombre: ${nombreProducto}, Precio: $${precio}, Disponible: ${disponible}, Stock: ${stock}, Categoría: ${categoria}`);

  console.log("\n=== Total del pedido ===");
  console.log(`Total a pagar: $${pedidoEjemplo.total().toFixed(2)}`);
}

main();
//Punto 4: Creacion de arreglos con datos simulados

import {Producto} from "../models/Producto";
import {Cliente} from "../models/Cliente";

export const productos: Producto[] = [
    {id: 1, nombre: "Elden Ring", precio: 59.99, stock: 30, disponible: true},
    {id: 2, nombre: "Cyberpunk 2077", precio: 49.99, stock: 20, disponible: true},
    {id: 3, nombre: "The Witcher 3", precio: 39.99, stock: 15, disponible: true},
    {id: 4, nombre: "God of War", precio: 59.99, stock: 25, disponible: true},
    {id: 5, nombre: "Horizon Zero Dawn", precio: 39.99, stock: 10, disponible: true},
    {id: 6, nombre: "Final Fantasy VII Remake", precio: 59.99, stock: 5, disponible: true},
    {id: 7, nombre: "Assassin's Creed Valhalla", precio: 59.99, stock: 20, disponible: true},
    {id: 8, nombre: "Left 4 dead 2", precio: 19.99, stock: 50, disponible: true},
    {id: 9, nombre: "Call of Duty: Modern Warfare", precio: 59.99, stock: 40, disponible: true},
    {id: 10, nombre: "Minecraft", precio: 26.95, stock: 100, disponible: true},
];

export const clientes: Cliente[] = [
    {id: "C1", nombre: "Juan Perez", email: "juan.perez@gmail.com", activo: true},
    {id: "C2", nombre: "Maria Lopez", email: "maria.lopez@gmail.com", activo: true, telefono: "0987654321"},
    {id: "C3", nombre: "Carlos Garcia", email: "carlosGarcia123@gmail.com", activo: false, telefono: "0987654321"},
    {id: "C4", nombre: "Ana Torres", email: "anamariaTorres54@gmail.com", activo: true, telefono: "0987654321"},
    {id: "C5", nombre: "Luis Martinez", email: "luis.martinez@ gmail.com", activo: false},
    {id: "C6", nombre: "Sofia Ramirez", email: "sofia.ramirez@gmail.com", activo: true},
    {id: "C7", nombre: "Pedro Sanchez", email: "pedrosanchez@gmail.com", activo: false},
    {id: "C8", nombre: "Laura Gomez", email: "lauragomez@gmail.com", activo: true, telefono: "0987654321"},
    {id: "C9", nombre: "Javier Diaz", email: "javierdiaz@gmail.com", activo: true, telefono: "0987654321"},
    {id: "C10", nombre: "Isabel Fernandez", email: "isabel.Fernandez@gmail.com", activo: true},
]
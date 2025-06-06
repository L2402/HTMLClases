
import { clientes, Cliente } from '../data/datos';

let clienteIdCounter = clientes.length + 1;

export function renderClientes(): void {
  const app = document.getElementById('clientes');
  if (!app) return;

  app.innerHTML = `
    <h2 class="text-xl font-bold mb-4">Registro de Cliente</h2>
    <form id="clienteForm" class="space-y-2 mb-6">
      <input id="nombre" class="border p-2 w-full" placeholder="Nombre" />
      <input id="correo" class="border p-2 w-full" placeholder="Correo electrónico" />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Agregar Cliente</button>
      <p id="error" class="text-red-500 text-sm"></p>
    </form>
    <h2 class="text-xl font-bold mb-4">Lista de Clientes</h2>
    <ul id="listaClientes" class="space-y-2"></ul>
  `;

  const form = document.getElementById('clienteForm') as HTMLFormElement;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value.trim();
    const correo = (document.getElementById('correo') as HTMLInputElement).value.trim();
    const error = document.getElementById('error')!;

    if (!nombre || !correo) {
      error.textContent = 'Todos los campos son obligatorios';
      return;
    }

    const nuevoCliente: Cliente = { id: clienteIdCounter++, nombre, correo };
    clientes.push(nuevoCliente);
    renderListaClientes();
    form.reset();
    error.textContent = '';
  });

  renderListaClientes();
}

function renderListaClientes(): void {
  const lista = document.getElementById('listaClientes');
  if (!lista) return;

  lista.innerHTML = '';
  clientes.forEach((cliente) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="p-4 border rounded shadow-md bg-white">
        <p><strong>Nombre:</strong> ${cliente.nombre}</p>
        <p><strong>Correo:</strong> ${cliente.correo}</p>
      </div>
    `;
    lista.appendChild(li);
  });
}

import { pedidos, clientes, productos, Pedido } from '../data/datos';

function mostrarPedidosCompleto(): void {
  const lista = document.getElementById('listaPedidos') as HTMLUListElement;
  lista.innerHTML = '';

  pedidos.forEach(pedido => {
    const cliente = clientes.find(c => c.id === pedido.clienteId);
    const producto = productos.find(p => p.id === pedido.productoId);

    if (cliente && producto) {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="p-4 border rounded shadow-md bg-white mb-2">
          <p><strong>Pedido ID:</strong> ${pedido.id}</p>
          <p><strong>Cliente:</strong> ${cliente.nombre}</p>
          <p><strong>Producto:</strong> ${producto.nombre}</p>
        </div>
      `;
      lista.appendChild(li);
    }
  });
}

export function renderPedidos(): void {
  const app = document.getElementById('pedidos') as HTMLDivElement;
  if (!app) return;

  app.innerHTML = `
    <h2 class="text-xl font-bold mb-4">Lista de Pedidos</h2>
    <form id="formPedido" class="space-y-2 mb-6">
      <label class="block">Cliente:</label>
      <input type="text" id="clientePedido" class="border p-2 w-full" required />
      <label class="block">Producto:</label>
      <input type="text" id="productoPedido" class="border p-2 w-full" required />
      <button type="submit" class="bg-purple-500 text-white px-4 py-2 rounded">Agregar Pedido</button>
    </form>
    <ul id="listaPedidos" class="space-y-2"></ul>
  `;

  const form = document.getElementById('formPedido') as HTMLFormElement;
  const clienteInput = document.getElementById('clientePedido') as HTMLInputElement;
  const productoInput = document.getElementById('productoPedido') as HTMLInputElement;
  const lista = document.getElementById('listaPedidos') as HTMLUListElement;

  // Carga todos los pedidos en la lista al renderizar
  mostrarPedidosCompleto();

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const cliente = clienteInput.value.trim();
    const producto = productoInput.value.trim();

    if (!cliente || !producto) return;

    const clienteEncontrado = clientes.find(c => c.nombre.toLowerCase() === cliente.toLowerCase());
    const productoEncontrado = productos.find(p => p.nombre.toLowerCase() === producto.toLowerCase());

    if (!clienteEncontrado || !productoEncontrado) {
      alert("Cliente o producto no encontrado");
      return;
    }

    const nuevoPedido: Pedido = {
      id: pedidos.length > 0 ? pedidos[pedidos.length - 1].id + 1 : 1,
      clienteId: clienteEncontrado.id,
      productoId: productoEncontrado.id
    };

    pedidos.push(nuevoPedido);

    mostrarPedidosCompleto();

    form.reset();
  });
}
import { productos } from '../data/datos';

export function renderProductos(): void {
  const app = document.getElementById('productos') as HTMLDivElement;
  if (!app) return;

  app.innerHTML = `
    <h2 class="text-xl font-bold mb-4">Gestión de Productos</h2>
    <form id="formProducto" class="space-y-2 mb-6">
      <label class="block">Nombre:</label>
      <input type="text" id="nombreProducto" class="border p-2 w-full" required />
      <label class="block">Precio:</label>
      <input type="number" id="precioProducto" class="border p-2 w-full" required />
      <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">Agregar</button>
    </form>
    <ul id="listaProductos" class="space-y-2"></ul>
  `;

  const form = document.getElementById('formProducto') as HTMLFormElement;
  const nombreInput = document.getElementById('nombreProducto') as HTMLInputElement;
  const precioInput = document.getElementById('precioProducto') as HTMLInputElement;
  const lista = document.getElementById('listaProductos') as HTMLUListElement;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = nombreInput.value.trim();
    const precio = parseFloat(precioInput.value);

    if (!nombre || isNaN(precio)) return;

    const nuevoProducto = {
        id: productos.length > 0 ? productos[productos.length - 1].id + 1 : 1,
        nombre,
        precio
    };
    productos.push(nuevoProducto);


    const li = document.createElement('li');
    li.innerHTML = `
      <div class="p-4 border rounded shadow-md bg-white">
        <p><strong>Producto:</strong> ${nombre}</p>
        <p><strong>Precio:</strong> $${precio.toFixed(2)}</p>
      </div>
    `;
    lista.appendChild(li);

    form.reset();
  });
}

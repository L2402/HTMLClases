import './style.css';

interface ICliente {
  id: number;
  cedula: string;
  nombre: string;
  facturas?: IFactura[];
}

interface IFactura {
  id: number;
  codigo: string;
  cliente: ICliente;
  total: number;
  fecha: Date;
  detalles: IDetalleFactura[];
}

interface IProducto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  detalles?: IDetalleFactura[];
}

interface IDetalleFactura {
  id: number;
  factura?: IFactura;
  producto: IProducto;
  cantidad: number;
  precio: number;
}

const factura1: IFactura = {
  id: 1,
  codigo: "F001",
  cliente: {
    id: 1,
    cedula: "1234567890",
    nombre: "Juan Perez"
  },
  total: 300,
  fecha: new Date(),
  detalles: [
    {
      id: 1,
      producto: {
        id: 1,
        nombre: "Producto A",
        precio: 50,
        stock: 10
      },
      cantidad: 2,
      precio: 50
    },
    {
      id: 2,
      producto: {
        id: 2,
        nombre: "Producto B",
        precio: 40,
        stock: 42,
      },
      cantidad: 5,
      precio: 40
    }
  ]
};

function generarFacturaHTML(factura: IFactura): string {
  let html = `
    <style>
      .factura {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        max-width: 600px;
        margin: 2em auto;
        padding: 2em;
        border-radius: 10px;
        background: #f9f9f9;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        color: #333;
      }
      .factura h2 {
        text-align: center;
        color: #2c3e50;
      }
      .factura p {
        margin: 0.3em 0;
      }
      .factura table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 1em;
      }
      .factura th, .factura td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
      }
      .factura th {
        background-color: #3498db;
        color: white;
      }
      .total {
        text-align: right;
        font-size: 1.2em;
        font-weight: bold;
        margin-top: 1em;
        color: #27ae60;
      }
    </style>

    <div class="factura">
      <h2>Factura: ${factura.codigo}</h2>
      <p><strong>Cliente:</strong> ${factura.cliente.nombre}</p>
      <p><strong>Cédula:</strong> ${factura.cliente.cedula}</p>
      <p><strong>Fecha:</strong> ${factura.fecha.toLocaleDateString()}</p>

      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
  `;

  factura.detalles?.forEach(detalle => {
    html += `
      <tr>
        <td>${detalle.producto.nombre}</td>
        <td>${detalle.cantidad}</td>
        <td>$${detalle.precio.toFixed(2)}</td>
        <td>$${(detalle.precio * detalle.cantidad).toFixed(2)}</td>
      </tr>
    `;
  });

  html += `
        </tbody>
      </table>

      <p class="total">Total a pagar: $${factura.total.toFixed(2)}</p>
    </div>
  `;

  return html;
}


document.querySelector<HTMLDivElement>("#app")!.innerHTML = generarFacturaHTML(factura1);

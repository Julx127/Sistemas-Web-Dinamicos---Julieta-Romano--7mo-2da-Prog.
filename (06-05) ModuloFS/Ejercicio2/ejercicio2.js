// EJERCICIO 2 nombre de producto, precio, cliente, porcentaje del iva
console.clear();
const calculos=require('./calculos2.js');
let pedido=calculos.crearPedido("Manzana", 300, "Mia");
let iva=calculos.calcIva(pedido.precio)
console.log(`PEDIDO`);
console.log(`Cliente: ${pedido.cliente}`);
console.log(`Producto: ${pedido.producto}`);
console.log(`Precio: $${pedido.precio}`);
console.log(`IVA (21%): $${iva}`);
console.log(`Total: $${iva+pedido.precio}`);
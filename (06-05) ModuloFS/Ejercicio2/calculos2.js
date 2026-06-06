// EJERCICIO 2 nombre de producto, precio, cliente, porcentaje del iva
function crearPedido(producto, precio, cliente){
    let pedido={producto: producto, precio: precio, cliente: cliente};
    return pedido;
}
function calcIva(precio){
    return (precio*21/100);
}

module.exports={
    crearPedido: crearPedido,
    calcIva: calcIva
}
fetch('datos.json')
.then(respuesta => respuesta.json())
.then(bd => {
    const inventario=bd;
    let filaProducto="";
    inventario.forEach(producto => {
        filaProducto=`
        <tr>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td>${producto.fecha_ingreso}</td>
            <td>${producto.stock}</td>
            <td>${producto.codigo}</td>
            <td>${producto.categoria}</td>
        </tr>`
        document.getElementById('tabla').innerHTML+=filaProducto;
    });
})
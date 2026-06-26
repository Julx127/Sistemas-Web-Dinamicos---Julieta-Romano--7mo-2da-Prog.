fetch('datos.json')
.then(respuesta => respuesta.json())
.then(bd => {
    const productos=bd;
    let disponible="AGOTADO";
    let filaProducto="";
    
    productos.forEach(producto => {
        if(producto.disponible){
        disponible="DISPONIBLE"
        }
        filaProducto=`
        <tr>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td>${disponible}</td>
            <td>${producto.detalles.color}</td>
            <td>${producto.detalles.talla}</td>
        </tr>`
        document.getElementById('tabla').innerHTML+=filaProducto;
    });
})
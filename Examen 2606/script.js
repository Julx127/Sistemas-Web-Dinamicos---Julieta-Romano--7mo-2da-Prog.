let productos = [
{ id: 1, nombre: "Laptop", categoria: "Electrónica", precio: 1200, stock: 5 },
{ id: 2, nombre: "Mouse", categoria: "Electrónica", precio: 25, stock: 30 },
{ id: 3, nombre: "Camisa", categoria: "Ropa", precio: 45, stock: 10 },
{ id: 4, nombre: "Monitor", categoria: "Electrónica", precio: 300, stock: 0 },
{ id: 5, nombre: "Pantalón", categoria: "Ropa", precio: 60, stock: 8 }
];

let id=5;
mostrar(productos);

// filtrar por electronica y precio menor a 500
function filtrar(){
    let productosFiltrados= productos.filter(x => x.categoria=="Electrónica" && x.precio<500);
    mostrar(productosFiltrados);
}

// hacer 10% de descuento
function modificar(){
    let productosModificados = productos;
    productosModificados.map(x => x.precio=x.precio-(x.precio*10/100))
    mostrar(productosModificados);
}

//buscar primer producto con stock 0
function buscar(){
    let productoBuscado = productos.find(x => x.stock===0)

    document.getElementById('resultado').innerHTML=`<tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>CATEGORIA</th>
            <th>PRECIO</th>
            <th>STOCK</th>
        </tr>
        <tr>
        <td> ${productoBuscado.id} </td>
        <td> ${productoBuscado.nombre} </td>
        <td> ${productoBuscado.categoria} </td>
        <td> $${productoBuscado.precio} </td>
        <td> ${productoBuscado.stock} </td>
        </tr>`;
}

// crear nueva tabla con el array pedido
function mostrar(array){
    let resultado=`<tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>CATEGORIA</th>
            <th>PRECIO</th>
            <th>STOCK</th>
        </tr>`;
    array.forEach(producto => {
        resultado+=`<tr>
        <td> ${producto.id} </td>
        <td> ${producto.nombre} </td>
        <td> ${producto.categoria} </td>
        <td> $${producto.precio} </td>
        <td> ${producto.stock} </td>
        </tr>`
    });

    document.getElementById('resultado').innerHTML=resultado;
}

// eleccion del usuario en el select
function elegir(){
    const eleccion=document.getElementById('eleccion').value
    switch(eleccion){
        case "#": mostrar(productos); break;
        case "1": filtrar(); break;
        case "2": modificar(); break;
        case "3": buscar(); break;
    }
}

// agregar elemento
function agregar(){
    id++;
    let nombre=document.getElementById('nombre').value;
    let categoria=document.getElementById('categoria').value;
    let precio=document.getElementById('precio').value;
    let stock=document.getElementById('stock').value;
    if(nombre && categoria && precio && stock){
    let nuevoProducto={ id: id, nombre: nombre, categoria: categoria, precio: precio, stock: stock };
    productos.push(nuevoProducto)
    mostrar(productos);
    }
    else{
        alert("Complete todos los campos")
    }
}

// minimo en fecha de retiro + obtener fecha actual y dia de la semana
const dia=new Date();
const dd=String(dia.getDate()).padStart(2, '0'); //el padStart sirve para establecer la longitud (2), y el relleno en caso de que haya espacios vacios (0)
const mm=String(dia.getMonth()).padStart(2, '0');
const aaaa=String(dia.getFullYear());
const diaSemana=dia.getDay();
const hoy=`${aaaa}-${mm}-${dd}`;
dia.setDate(dia.getDate()+1);
const maniana=dia.toISOString().split('T')[0];
document.getElementById('retiro').min=maniana;

// pedido
let nombre, apellido, dni, direccion, telefono, disfrazId, cantidad=1, retiro, precio=0, nuevoClienteId=0, nuevoPedidoId=0, empleado;

switch(diaSemana){ // definir id del empleado que trabaja el dia que se hizo el pedido
    case 1:
    case 2:
    case 3: empleado=1; break;
    case 4:
    case 5:
    case 6:
    case 0: empleado=2; break;
}
function modificarPrecio(){
    disfrazId=parseInt(document.getElementById('disfraz').value);
    fetch('datos.json')
        .then(respuesta => respuesta.json()) // se convierte a objeto de javascript
        .then(bd =>{
            const disfraz=bd.disfraces.find(item => item.id === disfrazId) // se encuentra el disfraz que tenga la id del value
            cantidad=parseInt(document.getElementById('cantidad').value);
            precio=disfraz.precio*cantidad;
            document.getElementById('precio').innerHTML=`$${precio}`;
        })
        .catch(error => console.error("Error al cargar el json: ", error))
}

function hacerPedido(){
    nombre=document.getElementById('nombre').value;
    apellido=document.getElementById('apellido').value;
    dni=parseInt(document.getElementById('dni').value);
    direccion=document.getElementById('direccion').value;
    telefono=parseInt(document.getElementById('telefono').value);
    disfrazId=parseInt(document.getElementById('disfraz').value);
    cantidad=parseInt(document.getElementById('cantidad').value);
    retiro=document.getElementById('retiro').value;
    nuevoClienteId++;
    nuevoPedidoId++;

    const nuevoCliente={id: nuevoClienteId, nombre: nombre, apellido: apellido, dni: dni, direccion: direccion, telefono: telefono};
    const nuevoPedido={id: nuevoPedidoId, fecha_pedido:hoy, fecha_retiro:retiro, id_cliente:nuevoClienteId, id_empleado:empleado, id_disfraz: disfrazId, cantidad:cantidad, precio: precio};

    fetch('datos.json')
        .then(respuesta => respuesta.json())
        .then(bd =>{
            tablaClientes=bd.clientes;
            tablaClientes.push(nuevoCliente);
            console.log(tablaClientes);

            tablaPedidos=bd.alquiler;
            tablaPedidos.push(nuevoPedido);
            console.log(tablaPedidos);
        })
        .catch(error => console.error("Error al cargar el json: ", error))
}
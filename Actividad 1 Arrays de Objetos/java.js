let presupuestos=[];
let marca, precio=0, cliente, iva=0, precioContado=0, intereses=0, precioIntereses=0, valor24Cuotas=0, valor36Cuotas=0;
function agregar(){
    marca=document.getElementById('marca').value;
    precio=parseInt(document.getElementById('precio').value);
    cliente=document.getElementById('nombre').value+' '+document.getElementById('apellido').value;
    iva=precio*21/100;
    precioContado=precio+iva;
    intereses=precioContado*10/100;
    precioIntereses=precioContado+intereses;
    valor24Cuotas=precioIntereses/24;
    valor36Cuotas=precioIntereses/36;
    presupuestos.push({marca: marca, precio: precio, cliente: cliente, iva: iva, precioContado: precioContado, intereses: intereses, precioIntereses: precioIntereses, valor24Cuotas: valor24Cuotas, valor36Cuotas: valor36Cuotas});
    mostrar();
}
function mostrar(){
    document.getElementById("tabla").innerHTML=`<td>MARCA</td>
            <td>PRECIO</td>
            <td>CLIENTE</td>
            <td>IVA 21%</td>
            <td>PRECIO CONTADO</td>
            <td>INTERESES 10%</td>
            <td>PRECIO CON INTERES</td>
            <td>VALOR EN 24 CUOTAS</td>
            <td>VALOR EN 36 CUOTAS</td>`;
    presupuestos.forEach(element => {
        document.getElementById("tabla").innerHTML+=`<tr>
        <td>${element.marca}</td>
        <td>$${element.precio}</td>
        <td>${element.cliente}</td>
        <td>$${element.iva}</td>
        <td>$${element.precioContado}</td>
        <td>$${element.intereses}</td>
        <td>$${element.precioIntereses}</td>
        <td>$${element.valor24Cuotas}</td>
        <td>$${element.valor36Cuotas}</td>
        </tr>`;
    });
    
}
function mayores(){
    document.getElementById("tabla").innerHTML=`<td>MARCA</td>
            <td>PRECIO</td>
            <td>CLIENTE</td>
            <td>IVA 21%</td>
            <td>PRECIO CONTADO</td>
            <td>INTERESES 10%</td>
            <td>PRECIO CON INTERES</td>
            <td>VALOR EN 24 CUOTAS</td>
            <td>VALOR EN 36 CUOTAS</td>`;
    presupuestos.forEach(element => {
        if(element.precio>=1000000){
            document.getElementById("tabla").innerHTML+=`<tr>
            <td>${element.marca}</td>
            <td>$${element.precio}</td>
            <td>${element.cliente}</td>
            <td>$${element.iva}</td>
            <td>$${element.precioContado}</td>
            <td>$${element.intereses}</td>
            <td>$${element.precioIntereses}</td>
            <td>$${element.valor24Cuotas}</td>
            <td>$${element.valor36Cuotas}</td>
            </tr>`;
        }
    });
}
function buscar(){
    document.getElementById("tabla").innerHTML=`<td>MARCA</td>
            <td>PRECIO</td>
            <td>CLIENTE</td>
            <td>IVA 21%</td>
            <td>PRECIO CONTADO</td>
            <td>INTERESES 10%</td>
            <td>PRECIO CON INTERES</td>
            <td>VALOR EN 24 CUOTAS</td>
            <td>VALOR EN 36 CUOTAS</td>`;
    let busqueda=document.getElementById('cliente').value;
    presupuestos.forEach(element => {
        if(element.cliente===busqueda){
            document.getElementById("tabla").innerHTML+=`<tr>
            <td>${element.marca}</td>
            <td>$${element.precio}</td>
            <td>${element.cliente}</td>
            <td>$${element.iva}</td>
            <td>$${element.precioContado}</td>
            <td>$${element.intereses}</td>
            <td>$${element.precioIntereses}</td>
            <td>$${element.valor24Cuotas}</td>
            <td>$${element.valor36Cuotas}</td>
            </tr>`;
        }
    });
}
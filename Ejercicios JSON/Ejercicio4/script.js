fetch('datos.json')
.then(respuesta => respuesta.json())
.then(bd => {
    const empleados=bd;
    let filaEmpleado="";
    empleados.forEach(empleado => {
        filaEmpleado=`
        <tr>
            <td>${empleado.nombre}</td>
            <td>${empleado.apellido}</td>
            <td>${empleado.fecha_nacimiento}</td>
            <td>${empleado.puesto}</td>
            <td>${empleado.departamento}</td>
            <td>${empleado.numero}</td>
        </tr>`
        document.getElementById('tabla').innerHTML+=filaEmpleado;
    });
})
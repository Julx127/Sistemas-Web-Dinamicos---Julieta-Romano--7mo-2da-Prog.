fetch('datos.json')
.then(respuesta => respuesta.json())
.then(bd => {
    const personas=bd;
    let filaPersona="";
    personas.forEach(persona => {
        filaPersona=`
        <tr>
            <td>${persona.name}</td>
            <td>${persona.age}</td>
        </tr>`
        document.getElementById('tabla').innerHTML+=filaPersona;
    });
})
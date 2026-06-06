const fs=require('fs'); // llamo al modulo fs y lo guardo en la variable fs
console.clear();
let archivo=`prepago.txt`
console.log(`Modo Asincrono`);
let contenido=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id velit in, vitae distinctio totam sequi iure deserunt ipsum eius eveniet numquam dolores, eum architecto explicabo qui doloremque? Ut, voluptate. `;

fs.writeFile(archivo, contenido, (error) =>{ // fs crea el archivo prepago.txt y le escribe el contenido
    if(error){
        console.log(`Error al grabar el archivo, \n${error}`);
        return
    }
    console.log(`Grabando archivo`);
})
console.log(`Fin de la grabacion`); // FIN DE LA GRABACION va a aparecer antes que GRABANDO ARCHIVO, porque se ejecuta todo linea por linea sin esperar a que los procesos terminen

let contenido2="Agregando \n datos";
fs.appendFile(archivo, contenido2, (error)=>{ //agrega el nuevo contenido al archivo ya creado
    if(error){
        return `No agrega`;
    }
    console.log(`Agregando datos`);
})
console.log(`Fin del agregado`); //FIN DEL AGREGADO aparece denajo de FIN DE LA GRABACION, y luego se ejecutan los dos fs.

console.log('Lectura del archivo');
fs.readFile(archivo, 'utf-8', (error, datos)=>{ // utf-8 sirve para poder leer el archivo en nuestro idioma
    if(error){
        throw `error al leer`;
    }
    console.log(datos);
})
console.log(`Fin de la lectura`);

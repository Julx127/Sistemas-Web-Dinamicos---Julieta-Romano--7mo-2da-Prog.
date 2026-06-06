const fs=require('fs');
console.clear();
let archivo='otro.txt';
let contenido=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id velit in, vitae distinctio totam sequi iure deserunt ipsum eius eveniet numquam dolores, eum architecto explicabo qui doloremque? Ut, voluptate. `;
console.log('Iniciando');
try{ // ejecuta linea por linea
    fs.writeFileSync(archivo, contenido) // writeFileSync es para crear un archivo, 
    fs.appendFileSync(archivo, contenido) //appendFileSync es para agregar contenido
    let datos=fs.readFileSync(archivo, 'utf-8') //lee los datos
    console.log(datos)
    console.log('Grabando');
}catch(er){ // si una linea tiene un error, la pagina no aborta pq el catch encapsula el error en una varibable (er) y muestra un msj personalizado
    console.log(`error ${er}`)
}
finally{ //optativo, se ejecuta despues de terminar el proceso
    console.log('Fin de la grabacion');
}

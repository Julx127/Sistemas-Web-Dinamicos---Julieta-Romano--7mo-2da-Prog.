let numeros=[];
function agregar(){
    numeros.push(parseInt(document.getElementById('numero').value));
    mostrar();
}
function mostrar(){
    document.getElementById("mostrar").innerHTML=``;
    numeros.forEach(element => {
        document.getElementById("mostrar").innerHTML+=`${element}, `;
    });
}
function buscar(){
    let indice=numeros.indexOf(parseInt(document.getElementById("numero").value));
    if(indice!=-1){
        document.getElementById("mostrar").innerHTML=`La posicion del numero es ${indice}`;
    }else{
        document.getElementById("mostrar").innerHTML=`El valor no existe`;
    }
}
function modificar(){
    let posicion=parseInt(document.getElementById("posicion").value);
    numeros[posicion]=parseInt(document.getElementById('numero').value);
    mostrar();
}
function eliminar(){
    let posicion=parseInt(document.getElementById("posicion").value);
    numeros.splice(posicion, 1);
    mostrar();
}
function insertar(){
    let numero=parseInt(document.getElementById("numero").value);
    let posicion=parseInt(document.getElementById("posicion").value);
    numeros.splice(posicion, 0, numero);
    mostrar();
}
let numeros=[];
function crear() {
    numeros=[];
    for (let i = 1; i <= 6; i++) {
        let valor = document.getElementById(`numero${i}`).value.trim();
        if (valor!==""){
            numeros.push(parseInt(valor)); 
        }
    }
}
function mostrar(){
    document.getElementById("mostrar").innerHTML=``;
    numeros.forEach(element => {
        document.getElementById("mostrar").innerHTML+=`${element}, `;
    });
}
function buscar(){

    let indice=numeros.indexOf(parseInt(prompt("Ingrese el numero que quiera buscar")));
    if(indice!=-1){
        document.getElementById("mostrar").innerHTML=`La posicion del numero es ${indice}`;
    }else{
        document.getElementById("mostrar").innerHTML=`El valor no existe`;
    }
}

function cantidad(){
    document.getElementById("mostrar").innerHTML=``;
    document.getElementById("mostrar").innerHTML=`La cantidad de numeros es de ${numeros.length}`;
}
function ordenar(){
    numeros.sort();
    mostrar();
}
let musica=[];
function mostrarMusica(){
    document.getElementById("vector").innerHTML=``;
    musica.forEach(element => {
        document.getElementById("vector").innerHTML+=`${element}, `;
        console.log(element);
    });
}
function primero(){
    musica=[];
    musica[0]="Jazz 🎺";
    musica[1]="Blues 🎷"
    mostrarMusica();
}
function segundo(){
    if(musica.length!=0){
        musica.push("Rock 'n' Roll 🎸");
        mostrarMusica();
    }else{
        alert("Debe crear un vector primero!");
    }
}
function tercero(){
    if(musica.length!=0){
        if((musica.length%2)!==0){
            let medio=((musica.length-1)/2);
            musica[medio]="Classics 🎻";
            mostrarMusica();
        }else{
            alert("El vector debe ser impar para tener un medio");
        }
    }else{
        alert("Debe crear un vector primero!");
    }
}
function cuarto(){
    if(musica.length!=0){
        musica.shift();
        mostrarMusica();
    }else{
        alert("Debe crear un vector primero!");
    }
}
function quinto(){
    if(musica.length!=0){
        musica.unshift("Rap 🎤");
        musica.unshift("Reggae 🪇");
        mostrarMusica();
    }else{
        alert("Debe crear un vector primero!");
    }
}


function mostrarSemana(dia){
    document.getElementById("dia").innerHTML=`Dia de la semana: ${dia}`;
    console.log(`Dia de la semana: ${dia}`);
}
function semana(){
    switch(parseInt(document.getElementById("numero").value)){
        case 0: mostrarSemana("domingo"); break;
        case 1: mostrarSemana("lunes"); break;
        case 2: mostrarSemana("martes"); break;
        case 3: mostrarSemana("miercoles"); break;
        case 4: mostrarSemana("jueves"); break;
        case 5: mostrarSemana("viernes"); break;
        case 6: mostrarSemana("sabado"); break;
        default: alert("Ingrese un valor entre 0 y 6"); break;
    }
}


let nombres=[];
function agregarNombre(){
    let nombre=document.getElementById("nombre").value;
    if(nombre!=""){
        if(nombres.length<6){
            nombres.push(nombre);
            console.log(nombres);
        }else{
            alert("Puede ingresar un maximo de 6 nombres");
        }
    }else{
        alert("Debe ingresar un nombre");
    }
}
function mostrarNombres(){
    document.getElementById("nombres").innerHTML=``;
    nombres.forEach(element => {
        document.getElementById("nombres").innerHTML+=`${element}, `;
        console.log(element);
    });
}
function ordenarNombres(){
    nombres.sort();
    mostrarNombres();
}
function mostrarCantidad(){
    document.getElementById("nombres").innerHTML=`Cantidad de nombres ingresados: ${nombres.length}`;
    console.log(`Cantidad de nombres ingresados: ${nombres.length}`);
}
function buscarNombre(){
    let nombre=document.getElementById("nombre").value;
    let indice=nombres.indexOf(nombre);
    if(indice!=-1){
        document.getElementById("nombres").innerHTML=`Indice del nombre: ${indice}`;
        console.log("Indice del nombre: "+indice);
    }else{
        document.getElementById("nombres").innerHTML=`No existe ese nombre`;
        console.log("Indice del nombre: "+indice);
    }
}

function opciones(){
    switch(parseInt(document.getElementById("opcion").value)){
        case 1: agregarNombre(); break;
        case 2: mostrarNombres(); break;
        case 3: ordenarNombres(); break;
        case 4: mostrarCantidad(); break;
        case 5: buscarNombre(); break;
    }
}
let vector=[];
let total=0;
let total36=0;
let mayores50=0;
function ingresar(){
    for(let i=1; i<=8; i++){
        vector[i]=parseInt(document.getElementById(`elemento`+i).value);
        total+=vector[i];
        if(vector[i]>36){
            total36+=vector[i];
        }
        if(vector[i]>50){
            mayores50++;
        }
    }
    document.getElementById("valorAcumulado").innerHTML=`VALOR ACUMULADO: ${total}`;
    document.getElementById("valorAcumuladoMayores36").innerHTML=`VALOR ACUMULADO DE LOS MAYORES A 36: ${total36}`;
    document.getElementById("mayores50").innerHTML=`ELEMENTOS MAYORES A 50: ${mayores50}`;
}
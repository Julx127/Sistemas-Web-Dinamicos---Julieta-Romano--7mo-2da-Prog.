let alumnosManiana=[];
let alumnosTarde=[];
let alumnosNoche=[];
let promedioM=0, promedioT=0, promedioN=0;
function ingresar(){
    for(let i=1; i<=5; i++){
        alumnosManiana[i]=parseInt(document.getElementById(`alumnoM`+i).value);
        promedioM+=alumnosManiana[i];
    }
    for(let i=1; i<=6; i++){
        alumnosTarde[i]=parseInt(document.getElementById(`alumnoT`+i).value);
        promedioT+=alumnosTarde[i];
    }
    for(let i=1; i<=11; i++){
        alumnosNoche[i]=parseInt(document.getElementById(`alumnoN`+i).value);
        promedioN+=alumnosNoche[i];
    }
    promedioM=promedioM/5;
    promedioT=promedioT/6;
    promedioN=promedioN/11;
    document.getElementById("promedioManiana").innerHTML=`PROMEDIO MAÑANA: ${promedioM}`;
    document.getElementById("promedioTarde").innerHTML=`PROMEDIO TARDE: ${promedioT}`;
    document.getElementById("promedioNoche").innerHTML=`PROMEDIO NOCHE: ${promedioN}`;
    if(promedioM>promedioN && promedioM>promedioT){
        document.getElementById("promedioMayor").innerHTML=`PROMEDIO MAYOR: Mañana`;
    }
    if(promedioN>promedioT && promedioN>promedioM){
        document.getElementById("promedioMayor").innerHTML=`PROMEDIO MAYOR: Noche`;
    }
    if(promedioT>promedioN && promedioT>promedioM){
        document.getElementById("promedioMayor").innerHTML=`PROMEDIO MAYOR: Tarde`;
    }
}

let alturas=[1.61, 1.77, 1.54, 1.78, 2.01, 1.62, 1.75, 1.67, 1.58, 1.63];
let promedio=0;
alturas.forEach(element => {
    document.getElementById("altura").innerHTML+=`${element} - `;
    promedio=promedio+element;
});

promedio=promedio/10;
document.getElementById("promedio").innerHTML+=`${promedio}`;

alturas.forEach(element => {
    if(element>=promedio){
        document.getElementById("altas").innerHTML+=`${element} - `;
    }else{
        document.getElementById("bajas").innerHTML+=`${element} - `;
    }
});
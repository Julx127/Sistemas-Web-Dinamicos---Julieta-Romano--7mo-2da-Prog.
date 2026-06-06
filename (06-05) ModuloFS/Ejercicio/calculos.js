function calcSueldoBruto(horas, paga){
    let sueldoBruto=horas*paga;
    return sueldoBruto;
}
function calcBonificacion(sueldoBruto){
    let bonificacion=(sueldoBruto*15/100);
    return bonificacion;
}
function calcSueldoNeto(sueldoBruto, bonificacion){
    let sueldoNeto=sueldoBruto+bonificacion;
    return sueldoNeto;
}
module.exports={
    calcSueldoBruto: calcSueldoBruto,
    calcBonificacion: calcBonificacion,
    calcSueldoNeto: calcSueldoNeto
}
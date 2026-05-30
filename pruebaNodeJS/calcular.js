function suma(n1, n2){
    let total;
    return total=n1+n2;
}
function resta(n1, n2){
    let total=n1-n2;
    console.log(`La resta es ${total}`);
}
function multi(n1, n2){
    let total=n1*n2;
    return total;
}
console.log(module.exports);
module.exports={
    calcSumar: suma,
    calcResta: resta,
    calcMulti: multi
}
console.log(module.exports);
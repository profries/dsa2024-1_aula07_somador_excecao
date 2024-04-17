function somarNumerosNaturais(num1, num2) {
    if(typeof(num1)!="number" ||  typeof(num2)!="number"){
        throw "Variaveis devem ser numeros";
    }
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        throw "Variaveis devem ser naturais - não é inteiro"
    }
    if(num1 <0 || num2 <0) {
        throw  "Variaveis devem ser naturais - positivos"
    }    
    return (num1+num2);
}
module.exports = {
    somarNumerosNaturais
}
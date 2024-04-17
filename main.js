const somador = require('./somador');

function main() {
    try{
        console.log(somador.somarNumerosNaturais(10,10));
    } catch(err) {
        console.log(err);
    }
    try{
        console.log(somador.somarNumerosNaturais("10",10));
    } catch(err) {
        console.log(err);
    }
    try{
        console.log(somador.somarNumerosNaturais(0.5,10));
    } catch(err) {
        console.log(err);
    }
    try{
        console.log(somador.somarNumerosNaturais(-0.5,10));
    } catch(err) {
        console.log(err);
    }
    try{
        console.log(somador.somarNumerosNaturais(-5,10));
    } catch(err) {
        console.log(err);
    }
    try{
        console.log(somador.somarNumerosNaturais(0,0));
    } catch(err) {
        console.log(err);
    }
}

main();
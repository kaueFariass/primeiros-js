function VerificarPar(){
    let numero = parseInt(prompt("Digite um numero"));
    let resultado

   
    
    if (numero % 2 == 0){
        resultado = "numero é par"
    }
    else if (numero % 2 == 1){
        resultado = "numero é impar"
    }
    alert(resultado);
}

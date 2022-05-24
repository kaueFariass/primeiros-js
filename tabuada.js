function tabuada () {
    let numero = parseInt(prompt("Digite um numero"));
    let resposta = parseInt(0);
    let tabuada = parseInt(0);
    if (numero > 9 ){
        alert("Número invalido")
    }
    else{
    for (let i=0; i<=10; i++)
    
    tabuada += numero + " X " + i + " = " + numero * i + "<br/>";
    resposta = tabuada
    document.write(resposta);
}
}